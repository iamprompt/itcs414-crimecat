# -*- coding: utf-8 -*-
"""
# Contributors

|          Name          |    ID   |
| ---------------------- | ------- |
| Thanapat Jumnongrat    | 6288018 |
| Supakarn Laorattanakul | 6288087 |
| Thanaboon Sapmontree   | 6288123 |
"""

# Import Modules
import warnings
import numpy as np
import pandas as pd
import seaborn as sns
from statistics import mean
from pythainlp import word_tokenize
from sklearn import svm
from sklearn.model_selection import KFold
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer

import utils

warnings.filterwarnings("ignore")

# Output File
f = open("../README.md", "w")

# Load Data into Dataframe
df_sentiment = pd.read_csv("../DATASET.csv")

# Divide Data into Content and Label
X = df_sentiment.iloc[:, 4:5].values  # Content
Y = df_sentiment.iloc[:, 5:].values  # Label


clean_text_arr = [utils.clean_msg(X[i][0]) for i in range(len(X))]  # Clean Text

# Tokenize the sentence into words
arr = [word_tokenize(clean_text_arr[i], keep_whitespace=False) for i in range(len(X))]

# Do countVectorizer < DF >
tokens_list_j = [",".join(token) for token in arr]
cvec = CountVectorizer(analyzer=lambda x: x.split(","))
c_feat = cvec.fit_transform(tokens_list_j)

# Do TFIDF for all news < to get TFIDF as features >
tvec = TfidfVectorizer(analyzer=lambda x: x.split(","))
t_feat = tvec.fit_transform(tokens_list_j)

# show TFIDF of the first data (or news)
t_feat[0, :].toarray()

# Convert TFIDF data into array for machine learning
TFIDF_Data = t_feat.toarray()

# Convert Multi label News into Single Label < For MultiClassification >
Label_Dict = {
    "Accident": 6,
    "Battery / Assault": 1,
    "Cyber Security": 8,
    "Drug": 3,
    "Fraud": 11,
    "Gambling": 4,
    "Murder": 0,
    "National Security": 10,
    "Sexual Abuse": 2,
    "State Crime": 9,
    "Theft / Burglary": 5,
    "Trafficking": 7,
    "Non-crime": 12,
}

Label = [i for i in Label_Dict.keys()]
Label_Priority = [i for i in Label_Dict.values()]


Y_Label = []
for i in range(len(Y)):
    Temp_label = []
    for j in range(len(Label_Dict.keys())):
        if Y[i][j] == 1:
            Temp_label.append(Label[j])
    if len(Temp_label) == 1:
        Y_Label.append(Temp_label[0])
    else:
        # ! Sort the Founded labels based on Label_Priority
        priority_sorted = [
            Temp_label
            for Label_Priority, Temp_label in sorted(zip(Label_Priority, Temp_label))
        ]
        Y_Label.append(priority_sorted[0])

Y_Label

"""# Convert Target data < news label >into array for machine learning"""

Y_label_data = np.array(Y_Label)

"""# Machine Learning part < KFold = 10 , LibLinear >"""

Kfold_classification_report_data = []
Y_Ground_Truth_data = []
Y_Predicted_data = []
kf = KFold(n_splits=10, random_state=42, shuffle=True)
for train_index, test_index in kf.split(TFIDF_Data):
    X_train, X_test, y_train, y_test = (
        TFIDF_Data[train_index],
        TFIDF_Data[test_index],
        Y_label_data[train_index],
        Y_label_data[test_index],
    )
    clf_Kfold = svm.LinearSVC(random_state=0).fit(X_train, y_train)
    result = clf_Kfold.predict(X_test)
    Y_Ground_Truth_data.append(y_test)
    Y_Predicted_data.append(result)
    Kfold_classification_report_data.append(
        classification_report(y_test, result, output_dict=True)
    )

"""# Show the classification report and Confusion matrix"""

All_KFold = True
Index = 0  # range: 0-9 -> need to set "All_KFold" as False
print("# KFold", file=f)
if All_KFold is True:
    count = 1
    for i in range(10):
        print("## **Round " + str(count) + "**", file=f)
        print("### **Classification_report**", file=f)
        print("```", file=f)
        print(
            classification_report(Y_Ground_Truth_data[i], Y_Predicted_data[i]), file=f
        )
        print("```", file=f)
        print("### **Confustion matrix**", file=f)
        print("```", file=f)
        print(confusion_matrix(Y_Ground_Truth_data[i], Y_Predicted_data[i]), file=f)
        print("```", file=f)
        count += 1
else:
    print("## **Round " + str(Index) + "**", file=f)
    print("### **Classification_report**", file=f)
    print("```", file=f)
    print(
        classification_report(Y_Ground_Truth_data[Index], Y_Predicted_data[Index]),
        file=f,
    )
    print("```", file=f)
    print("### **Confustion matrix**", file=f)
    cm = confusion_matrix(Y_Ground_Truth_data[Index], Y_Predicted_data[Index], file=f)
    print("```", file=f)
    sns.heatmap(
        cm,
        annot=True,
        xticklabels=Label,
        yticklabels=Label,
    )
    print("```", file=f)

"""# Convert Dict Data into List Data"""

# ! accuracy at the last for easier to code
Class_list = [
    "Accident",
    "Battery / Assault",
    "Cyber Security",  # NEW
    "Drug",
    "Fraud",  # NEW
    "Gambling",
    "Murder",
    "National Security",  # NEW
    "Sexual Abuse",
    "State Crime",  # NEW
    "Theft / Burglary",
    "Trafficking",  # NEW
    "Non-crime",
    "macro avg",
    "weighted avg",
]
Main_Class_Data = [[[], [], [], []] for i in range(len(Class_list))]
Main_Class_Data.append([])
Sub_Class_list = ["precision", "recall", "f1-score", "support"]

for i in range(10):
    for j in range(15):
        for k in range(4):
            if Class_list[j] in Kfold_classification_report_data[i]:
                Main_Class_Data[j][k].append(
                    Kfold_classification_report_data[i][Class_list[j]][
                        Sub_Class_list[k]
                    ]
                )
            else:
                Main_Class_Data[j][k].append(0)
    Main_Class_Data[len(Main_Class_Data) - 1].append(
        Kfold_classification_report_data[i]["accuracy"]
    )

"""# Calculate the Avg of all classification_report"""
Result_Class_Data = [[[], [], [], []] for i in range(len(Class_list))]
Result_Class_Data.append([])

for i in range(15):
    for j in range(4):
        Result_Class_Data[i][j].append(round(mean(Main_Class_Data[i][j]), 2))

Result_Class_Data[15].append(round(mean(Main_Class_Data[15]), 2))

# Print the Avg of all classification report

Class_list = [
    "Accident",
    "Battery/Assault",
    "Drug",
    "Gambling",
    "Murder",
    "Non-Crime",
    "Sexual Abuse",
    "Theft/Burglary",
]
Avg_list = ["Macro avg", "Weighted avg"]

print("## Avg Classification Report of 10 KFold", file=f)
print("```", file=f)
print(
    "{:20}{:>10}{:>10}{:>10}{:>10}".format(
        "",
        Sub_Class_list[0],
        Sub_Class_list[1],
        Sub_Class_list[2],
        Sub_Class_list[3],
    ),
    file=f,
)
for i in range(len(Label)):
    print(
        "{:20}{:10.2f}{:10.2f}{:10.2f}{:10.2f}".format(
            f"{Label[i]}:",
            Result_Class_Data[i][0][0],
            Result_Class_Data[i][1][0],
            Result_Class_Data[i][2][0],
            Result_Class_Data[i][3][0],
        ),
        file=f,
    )

print(
    "\n{:40}{:10.2f}{:10.2f}".format(
        "Accuracy", Result_Class_Data[15][0], Result_Class_Data[14][3][0]
    ),
    file=f,
)
for i in range(13, 15):
    print(
        "{:20}{:10.2f}{:10.2f}{:10.2f}{:10.2f}".format(
            f"{Avg_list[i - 15]}:",
            Result_Class_Data[i][0][0],
            Result_Class_Data[i][1][0],
            Result_Class_Data[i][2][0],
            Result_Class_Data[i][3][0],
        ),
        file=f,
    )
print("```", file=f)
