# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.57      1.00      0.73         8
Battery / Assault       0.88      0.88      0.88         8
          Bribery       0.00      0.00      0.00         1
   Cyber Security       1.00      0.40      0.57         5
             Drug       0.96      0.88      0.92        25
            Fraud       0.76      0.95      0.84        20
         Gambling       1.00      1.00      1.00         5
           Murder       0.85      0.81      0.83        27
National Security       0.90      0.95      0.93        20
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       1.00      0.75      0.86        12
      State Crime       0.67      0.67      0.67         3
 Theft / Burglary       0.90      0.90      0.90        10
      Trafficking       0.86      0.75      0.80         8

         accuracy                           0.85       154
        macro avg       0.81      0.75      0.76       154
     weighted avg       0.87      0.85      0.85       154

```
### **Confustion matrix**
```
[[ 8  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  3  0  0  0  0  0  0  0  0]
 [ 1  0  0  0 22  1  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  1 19  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 2  1  0  0  0  1  0 22  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0  0 19  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  1  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  3  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  2  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  9  0]
 [ 2  0  0  0  0  0  0  0  0  0  0  0  0  6]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.78      0.88         9
Battery / Assault       0.87      0.91      0.89        22
          Bribery       0.80      0.57      0.67         7
   Cyber Security       0.80      0.57      0.67         7
             Drug       0.83      0.91      0.87        11
            Fraud       0.73      0.80      0.76        20
         Gambling       1.00      0.90      0.95        10
           Murder       0.89      0.93      0.91        27
National Security       0.65      1.00      0.79        13
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.73      1.00      0.84         8
      State Crime       1.00      0.29      0.44         7
 Theft / Burglary       0.75      0.50      0.60         6
      Trafficking       1.00      1.00      1.00         5

         accuracy                           0.82       154
        macro avg       0.86      0.76      0.78       154
     weighted avg       0.84      0.82      0.82       154

```
### **Confustion matrix**
```
[[ 7  1  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0 20  0  0  1  0  0  1  0  0  0  0  0  0]
 [ 0  1  4  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  4  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 10  0  0  1  0  0  0  0  0  0]
 [ 0  0  1  1  0 16  0  0  0  0  1  0  1  0]
 [ 0  1  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 25  0  0  2  0  0  0]
 [ 0  0  0  0  0  0  0  0 13  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  2  0  0]
 [ 0  0  0  0  0  2  0  1  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.67      0.67         6
Battery / Assault       1.00      0.67      0.80         9
          Bribery       1.00      0.80      0.89         5
   Cyber Security       0.67      0.67      0.67         3
             Drug       0.95      0.90      0.92        20
            Fraud       0.83      1.00      0.90        19
         Gambling       1.00      1.00      1.00         6
           Murder       0.86      0.94      0.90        33
National Security       0.93      0.96      0.94        26
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.92      0.92      0.92        13
      State Crime       0.50      0.33      0.40         3
 Theft / Burglary       1.00      0.90      0.95        10

         accuracy                           0.89       154
        macro avg       0.79      0.75      0.77       154
     weighted avg       0.89      0.89      0.88       154

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  4  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  1 18  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0 19  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0]
 [ 1  0  0  0  1  0  0 31  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 25  0  0  1  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0 12  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  9]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.88      1.00      0.93         7
Battery / Assault       1.00      0.71      0.83        14
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.50      1.00      0.67         1
             Drug       1.00      0.77      0.87        22
            Fraud       0.80      0.94      0.86        17
         Gambling       1.00      0.90      0.95        10
           Murder       0.80      0.97      0.88        34
National Security       1.00      0.88      0.93        16
        Non-crime       0.50      0.33      0.40         3
     Sexual Abuse       0.92      1.00      0.96        11
      State Crime       0.67      1.00      0.80         2
 Theft / Burglary       1.00      0.78      0.88         9
      Trafficking       0.71      1.00      0.83         5

         accuracy                           0.88       154
        macro avg       0.84      0.85      0.83       154
     weighted avg       0.90      0.88      0.88       154

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0 10  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 1  0  0  0 17  0  0  2  0  0  1  0  0  1]
 [ 0  0  0  0  0 16  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 33  0  1  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 14  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  1  0  0  0  1]
 [ 0  0  0  0  0  0  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         5
Battery / Assault       0.67      0.86      0.75         7
          Bribery       0.75      1.00      0.86         3
   Cyber Security       0.50      0.67      0.57         3
             Drug       1.00      0.95      0.97        20
            Fraud       0.97      0.97      0.97        32
         Gambling       1.00      1.00      1.00        11
           Murder       0.77      0.89      0.83        19
National Security       0.94      1.00      0.97        16
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       1.00      0.82      0.90        17
      State Crime       1.00      1.00      1.00         3
 Theft / Burglary       1.00      1.00      1.00         8
      Trafficking       1.00      0.67      0.80         6

         accuracy                           0.92       153
        macro avg       0.90      0.87      0.87       153
     weighted avg       0.93      0.92      0.91       153

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 19  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0 31  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 11  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0 17  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 16  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  1  1  0  0  0  0]
 [ 0  1  0  0  0  0  0  2  0  0 14  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  3  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  8  0]
 [ 0  0  1  1  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      1.00      0.91         5
Battery / Assault       0.80      0.80      0.80        10
          Bribery       0.50      0.50      0.50         2
   Cyber Security       0.50      0.33      0.40         3
             Drug       0.94      0.94      0.94        17
            Fraud       0.89      0.85      0.87        20
         Gambling       1.00      1.00      1.00         6
           Murder       0.85      0.88      0.86        25
National Security       0.80      0.91      0.85        22
        Non-crime       1.00      0.40      0.57         5
     Sexual Abuse       0.70      1.00      0.82         7
      State Crime       0.80      0.57      0.67         7
 Theft / Burglary       0.93      1.00      0.97        14
      Trafficking       1.00      0.80      0.89        10

         accuracy                           0.86       153
        macro avg       0.82      0.78      0.79       153
     weighted avg       0.86      0.86      0.85       153

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  8  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  0  0  0  1  0  0  0]
 [ 0  0  1  1  0 17  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  0 22  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  1 20  0  0  1  0  0]
 [ 0  1  0  0  0  0  0  1  1  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  4  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0 14  0]
 [ 1  0  0  0  0  0  0  0  0  0  1  0  0  8]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         6
Battery / Assault       0.40      0.33      0.36         6
          Bribery       1.00      0.60      0.75         5
   Cyber Security       0.50      0.25      0.33         4
             Drug       0.78      0.93      0.85        27
            Fraud       0.80      0.80      0.80        20
         Gambling       1.00      0.70      0.82        10
           Murder       0.78      0.90      0.84        20
National Security       0.80      0.94      0.86        17
        Non-crime       1.00      1.00      1.00         3
     Sexual Abuse       0.83      0.83      0.83        12
      State Crime       1.00      0.33      0.50         6
 Theft / Burglary       0.92      0.92      0.92        13
      Trafficking       0.80      1.00      0.89         4

         accuracy                           0.82       153
        macro avg       0.83      0.75      0.77       153
     weighted avg       0.82      0.82      0.81       153

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  3  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 25  0  0  1  0  0  1  0  0  0]
 [ 0  0  0  0  4 16  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  1  7  0  0  0  0  0  1  0]
 [ 0  1  0  0  1  0  0 18  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 16  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  3  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0 10  0  0  1]
 [ 0  1  0  0  0  0  0  0  3  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0 12  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         6
Battery / Assault       0.88      0.78      0.82         9
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.50      0.67         4
             Drug       0.93      0.93      0.93        15
            Fraud       0.87      1.00      0.93        20
         Gambling       1.00      1.00      1.00        12
           Murder       0.93      1.00      0.96        37
National Security       0.79      0.96      0.86        23
     Sexual Abuse       0.89      0.80      0.84        10
      State Crime       0.00      0.00      0.00         5
 Theft / Burglary       1.00      1.00      1.00         7
      Trafficking       1.00      0.33      0.50         3

         accuracy                           0.89       153
        macro avg       0.87      0.77      0.79       153
     weighted avg       0.88      0.89      0.87       153

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  1  0  0  0  0]
 [ 0  0  0  0 14  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0 20  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 12  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 37  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 22  0  1  0  0]
 [ 0  1  0  0  0  1  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  1]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00        10
Battery / Assault       1.00      0.57      0.73        14
          Bribery       0.75      0.50      0.60         6
   Cyber Security       0.80      1.00      0.89         4
             Drug       0.78      0.88      0.82        16
            Fraud       0.75      0.75      0.75        20
         Gambling       1.00      1.00      1.00        12
           Murder       0.68      0.90      0.78        21
National Security       0.78      0.95      0.86        19
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.92      1.00      0.96        12
      State Crime       1.00      0.33      0.50         6
 Theft / Burglary       0.86      0.67      0.75         9
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.82       153
        macro avg       0.81      0.75      0.76       153
     weighted avg       0.84      0.82      0.81       153

```
### **Confustion matrix**
```
[[10  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  8  0  0  0  0  0  5  0  0  1  0  0  0]
 [ 0  0  3  0  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  4  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  1  0  0  0  0  1  0]
 [ 0  0  1  1  2 15  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 12  0  0  0  0  0  0  0]
 [ 0  0  0  0  2  0  0 19  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 18  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  2  0  0]
 [ 0  0  0  0  0  2  0  1  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.83      0.91         6
Battery / Assault       0.71      0.50      0.59        10
          Bribery       0.86      0.75      0.80         8
   Cyber Security       0.50      0.40      0.44         5
             Drug       0.85      0.85      0.85        13
            Fraud       0.96      0.92      0.94        25
         Gambling       0.92      0.92      0.92        13
           Murder       0.92      0.92      0.92        24
National Security       0.72      0.90      0.80        20
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.89      0.89      0.89         9
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       0.86      0.92      0.89        13
      Trafficking       0.75      1.00      0.86         3

         accuracy                           0.84       153
        macro avg       0.78      0.77      0.77       153
     weighted avg       0.84      0.84      0.83       153

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  1  0]
 [ 0  5  0  0  0  0  0  1  2  0  1  1  0  0]
 [ 0  0  6  0  1  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  2  0  1  0  0  2  0  0  0  0  0]
 [ 0  1  0  0 11  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  1  0 23  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0 12  0  0  0  0  0  0  0]
 [ 0  1  1  0  0  0  0 22  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0 12  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.89      0.89      0.88      6.80
Battery / Assault:        0.82      0.70      0.74     10.90
Bribery:                  0.77      0.64      0.69      4.20
Cyber Security:           0.68      0.58      0.59      3.90
Drug:                     0.90      0.89      0.89     18.60
Fraud:                    0.84      0.90      0.86     21.30
Gambling:                 0.99      0.94      0.96      9.50
Murder:                   0.83      0.91      0.87     26.70
National Security:        0.83      0.94      0.88     19.20
Sexual Abuse:             0.88      0.90      0.88     11.10
State Crime:              0.66      0.45      0.50      4.50
Theft / Burglary:         0.92      0.86      0.88      9.90
Trafficking:              0.81      0.76      0.76      4.70
Non-crime:                0.65      0.41      0.48      2.10

Accuracy                                      0.86    153.40
Weighted avg:             0.83      0.78      0.79    153.40
Macro avg:                0.87      0.86      0.85    153.40
```
