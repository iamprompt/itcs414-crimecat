# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.57      1.00      0.73         4
Battery / Assault       1.00      0.79      0.88        14
          Bribery       1.00      1.00      1.00         3
   Cyber Security       0.75      0.50      0.60         6
             Drug       0.95      0.86      0.90        21
            Fraud       0.77      0.89      0.83        19
         Gambling       0.83      0.83      0.83         6
           Murder       0.87      0.96      0.91        27
National Security       0.82      0.86      0.84        21
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.92      0.92      0.92        13
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       0.88      0.78      0.82         9
      Trafficking       0.83      0.71      0.77         7

         accuracy                           0.84       154
        macro avg       0.80      0.76      0.76       154
     weighted avg       0.85      0.84      0.84       154

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0 11  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 18  2  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  1 17  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  1  0]
 [ 1  0  0  0  0  0  0 26  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 18  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  1  1  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  0  7  0]
 [ 2  0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.83      0.91        12
Battery / Assault       0.86      0.75      0.80        16
          Bribery       1.00      1.00      1.00         4
   Cyber Security       0.00      0.00      0.00         3
             Drug       0.85      0.92      0.88        12
            Fraud       0.96      0.92      0.94        24
         Gambling       1.00      0.88      0.93         8
           Murder       0.88      0.97      0.92        36
National Security       0.79      0.85      0.81        13
        Non-crime       0.50      1.00      0.67         1
     Sexual Abuse       0.82      1.00      0.90         9
      State Crime       0.67      0.80      0.73         5
 Theft / Burglary       1.00      0.86      0.92         7
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.88       154
        macro avg       0.81      0.82      0.80       154
     weighted avg       0.87      0.88      0.87       154

```
### **Confustion matrix**
```
[[10  1  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0 12  0  0  0  0  0  3  0  0  1  0  0  0]
 [ 0  0  4  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  2  0  0  0  0  0]
 [ 0  0  0  0 11  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  1 22  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 35  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 11  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  4  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  6  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  3]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.33      0.44         6
Battery / Assault       0.73      0.80      0.76        10
          Bribery       1.00      0.67      0.80         6
   Cyber Security       0.50      0.67      0.57         3
             Drug       0.84      0.80      0.82        20
            Fraud       0.89      0.92      0.91        26
         Gambling       1.00      1.00      1.00         9
           Murder       0.82      0.88      0.85        26
National Security       0.88      0.94      0.91        16
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.78      0.88      0.82         8
      State Crime       0.75      0.50      0.60         6
 Theft / Burglary       0.91      1.00      0.95        10
      Trafficking       0.88      1.00      0.93         7

         accuracy                           0.84       154
        macro avg       0.76      0.74      0.74       154
     weighted avg       0.84      0.84      0.84       154

```
### **Confustion matrix**
```
[[ 2  0  0  0  1  0  0  3  0  0  0  0  0  0]
 [ 0  8  0  0  1  0  0  1  0  0  0  0  0  0]
 [ 0  0  4  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1 16  0  0  1  0  0  1  0  0  1]
 [ 0  0  0  1  0 24  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0 23  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 15  0  0  1  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  7  0  0  0]
 [ 0  1  0  0  0  0  0  0  2  0  0  3  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  7]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      1.00      0.91        10
Battery / Assault       1.00      0.82      0.90        11
          Bribery       1.00      1.00      1.00         3
   Cyber Security       0.67      0.67      0.67         3
             Drug       1.00      0.91      0.95        22
            Fraud       0.86      0.95      0.90        20
         Gambling       1.00      1.00      1.00         9
           Murder       0.83      0.94      0.88        32
National Security       0.93      1.00      0.97        14
        Non-crime       1.00      0.25      0.40         4
     Sexual Abuse       1.00      0.89      0.94         9
      State Crime       1.00      0.75      0.86         4
 Theft / Burglary       0.90      0.82      0.86        11
      Trafficking       0.67      1.00      0.80         2

         accuracy                           0.90       154
        macro avg       0.91      0.86      0.86       154
     weighted avg       0.91      0.90      0.90       154

```
### **Confustion matrix**
```
[[10  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 1  0  0  0 20  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0 19  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0 30  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0  0 14  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  1  0  1  0  0  0  1]
 [ 0  0  0  0  0  0  0  1  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  3  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      1.00      0.92         6
Battery / Assault       0.78      0.78      0.78         9
          Bribery       0.75      0.75      0.75         4
   Cyber Security       0.50      1.00      0.67         2
             Drug       0.95      0.91      0.93        22
            Fraud       0.91      0.91      0.91        23
         Gambling       0.90      0.82      0.86        11
           Murder       0.76      0.84      0.80        19
National Security       0.74      1.00      0.85        14
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.81      0.81      0.81        16
      State Crime       1.00      0.62      0.77         8
 Theft / Burglary       1.00      0.83      0.91        12
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.85       154
        macro avg       0.85      0.82      0.81       154
     weighted avg       0.87      0.85      0.85       154

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  3  0  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 20  0  0  1  0  0  1  0  0  0]
 [ 0  0  0  1  0 21  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  9  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  0 16  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 14  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  1  0  0  0  0]
 [ 0  1  0  1  0  0  0  1  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  5  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  1  0 10  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      1.00      0.92         6
Battery / Assault       0.80      0.80      0.80         5
          Bribery       0.00      0.00      0.00         4
   Cyber Security       1.00      0.50      0.67         2
             Drug       1.00      0.96      0.98        24
            Fraud       0.74      0.94      0.83        18
         Gambling       1.00      1.00      1.00         3
           Murder       0.88      0.91      0.89        32
National Security       0.93      1.00      0.96        27
        Non-crime       1.00      0.50      0.67         4
     Sexual Abuse       0.85      0.92      0.88        12
      State Crime       1.00      0.67      0.80         3
 Theft / Burglary       0.86      1.00      0.92         6
      Trafficking       1.00      0.75      0.86         8

         accuracy                           0.89       154
        macro avg       0.85      0.78      0.80       154
     weighted avg       0.88      0.89      0.88       154

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  4  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 23  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0 17  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  1  0 29  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 27  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  1  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  6  0]
 [ 1  0  0  0  0  0  0  0  0  0  1  0  0  6]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       0.71      0.50      0.59        10
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.67      0.40      0.50         5
             Drug       0.77      0.91      0.83        22
            Fraud       0.77      0.81      0.79        21
         Gambling       1.00      0.82      0.90        11
           Murder       0.68      0.89      0.77        19
National Security       0.77      0.91      0.83        22
        Non-crime       1.00      0.75      0.86         4
     Sexual Abuse       0.91      0.77      0.83        13
      State Crime       0.00      0.00      0.00         4
 Theft / Burglary       1.00      1.00      1.00        14
      Trafficking       0.67      1.00      0.80         2

         accuracy                           0.81       154
        macro avg       0.78      0.73      0.74       154
     weighted avg       0.80      0.81      0.79       154

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  0  2  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 20  0  0  1  0  0  1  0  0  0]
 [ 0  0  0  0  3 17  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  1  1  9  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  0 17  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  1 20  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  3  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  0 10  0  0  1]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0 14  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      0.80      0.80         5
Battery / Assault       0.89      0.80      0.84        10
          Bribery       0.75      1.00      0.86         3
   Cyber Security       1.00      0.50      0.67         6
             Drug       0.94      0.88      0.91        17
            Fraud       0.81      0.94      0.87        18
         Gambling       1.00      1.00      1.00        10
           Murder       0.92      1.00      0.96        34
National Security       0.85      0.92      0.88        24
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.89      0.80      0.84        10
      State Crime       0.25      0.25      0.25         4
 Theft / Burglary       1.00      1.00      1.00         7
      Trafficking       1.00      0.60      0.75         5

         accuracy                           0.88       154
        macro avg       0.79      0.75      0.76       154
     weighted avg       0.88      0.88      0.87       154

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  8  0  0  0  0  0  1  0  0  0  1  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  2  0  0  1  0  0  0  0  0]
 [ 1  0  0  0 15  1  0  0  0  0  0  0  0  0]
 [ 0  0  1  0  0 17  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 10  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 34  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 22  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  1  0  0  0  1  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  1  0  0  0  0  0  1  0  0  3]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00        10
Battery / Assault       1.00      0.43      0.60        14
          Bribery       0.50      0.33      0.40         3
   Cyber Security       0.75      0.75      0.75         4
             Drug       0.79      0.88      0.83        17
            Fraud       0.83      0.79      0.81        19
         Gambling       1.00      1.00      1.00        15
           Murder       0.65      0.89      0.76        19
National Security       0.81      0.95      0.88        22
     Sexual Abuse       0.92      1.00      0.96        11
      State Crime       1.00      0.33      0.50         6
 Theft / Burglary       0.80      0.80      0.80        10
      Trafficking       1.00      1.00      1.00         4

         accuracy                           0.83       154
        macro avg       0.85      0.78      0.79       154
     weighted avg       0.85      0.83      0.82       154

```
### **Confustion matrix**
```
[[10  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  6  0  1  0  1  0]
 [ 0  0  1  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0 15  0  0  1  0  0  0  1  0]
 [ 0  0  1  1  2 15  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 15  0  0  0  0  0  0]
 [ 0  0  0  0  2  0  0 17  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 21  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  2  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  4]]
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
National Security       0.71      0.89      0.79        19
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.90      0.90      0.90        10
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
 [ 0  0  0  0  0  0  0  0 17  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0 12  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.86      0.88      0.85      6.80
Battery / Assault:        0.85      0.70      0.75     10.90
Bribery:                  0.79      0.70      0.73      4.20
Cyber Security:           0.63      0.54      0.55      3.90
Drug:                     0.89      0.89      0.89     19.00
Fraud:                    0.85      0.90      0.87     21.30
Gambling:                 0.97      0.93      0.94      9.50
Murder:                   0.82      0.92      0.87     26.80
National Security:        0.82      0.93      0.87     19.20
Sexual Abuse:             0.88      0.89      0.88     11.10
State Crime:              0.57      0.39      0.45      4.50
Theft / Burglary:         0.92      0.90      0.91      9.90
Trafficking:              0.88      0.86      0.85      4.70
Non-crime:                0.65      0.43      0.48      2.10

Accuracy                                      0.86    153.90
Weighted avg:             0.82      0.78      0.78    153.90
Macro avg:                0.86      0.86      0.85    153.90
```
