# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.50      1.00      0.67         3
Battery / Assault       0.82      0.90      0.86        10
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.25      1.00      0.40         1
             Drug       0.94      1.00      0.97        16
            Fraud       0.89      0.94      0.92        18
         Gambling       1.00      0.92      0.96        12
           Murder       0.85      0.93      0.89        30
National Security       0.96      0.88      0.92        26
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       1.00      0.79      0.88        14
      State Crime       0.67      0.67      0.67         3
 Theft / Burglary       1.00      0.80      0.89        10
      Trafficking       1.00      0.67      0.80         6

         accuracy                           0.88       154
        macro avg       0.85      0.83      0.81       154
     weighted avg       0.91      0.88      0.89       154

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0 17  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0 11  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  1  0 28  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  1 23  0  0  1  0  0]
 [ 0  0  0  1  0  0  0  0  0  1  0  0  0  0]
 [ 0  1  0  0  0  0  0  2  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  1  0  0  1  0  0  0  0  8  0]
 [ 2  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         9
Battery / Assault       0.93      0.74      0.82        19
          Bribery       1.00      0.50      0.67         6
   Cyber Security       0.50      0.25      0.33         4
             Drug       1.00      0.85      0.92        20
            Fraud       0.67      0.92      0.77        13
         Gambling       1.00      0.90      0.95        10
           Murder       0.80      0.89      0.84        36
National Security       0.94      0.94      0.94        16
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.64      0.88      0.74         8
      State Crime       0.67      1.00      0.80         2
 Theft / Burglary       0.71      0.71      0.71         7
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.84       154
        macro avg       0.85      0.83      0.82       154
     weighted avg       0.86      0.84      0.84       154

```
### **Confustion matrix**
```
[[ 9  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0 14  0  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  1  3  0  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  1  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  0  0  2  0  0  1  0  0  0]
 [ 0  0  0  0  0 12  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  1  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 32  0  0  2  0  2  0]
 [ 0  0  0  0  0  0  0  0 15  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.88      0.93         8
Battery / Assault       0.75      0.86      0.80         7
          Bribery       1.00      1.00      1.00         3
   Cyber Security       0.60      1.00      0.75         3
             Drug       1.00      0.88      0.93        16
            Fraud       1.00      0.92      0.96        24
         Gambling       1.00      1.00      1.00         7
           Murder       0.84      0.90      0.87        29
National Security       0.80      1.00      0.89        20
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       1.00      0.93      0.96        14
      State Crime       1.00      0.40      0.57         5
 Theft / Burglary       1.00      1.00      1.00        11
      Trafficking       1.00      1.00      1.00         4

         accuracy                           0.90       153
        macro avg       0.86      0.84      0.83       153
     weighted avg       0.91      0.90      0.90       153

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1 14  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0 22  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0 26  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 20  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0 11  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.89      0.80      0.84        10
Battery / Assault       1.00      0.75      0.86        12
          Bribery       1.00      0.75      0.86         4
   Cyber Security       1.00      0.33      0.50         3
             Drug       0.87      0.81      0.84        16
            Fraud       0.82      0.90      0.86        20
         Gambling       1.00      1.00      1.00         8
           Murder       0.75      1.00      0.86        24
National Security       0.73      0.89      0.80        18
        Non-crime       1.00      0.17      0.29         6
     Sexual Abuse       0.93      1.00      0.96        13
      State Crime       0.67      0.57      0.62         7
 Theft / Burglary       1.00      0.86      0.92         7
      Trafficking       0.80      0.80      0.80         5

         accuracy                           0.84       153
        macro avg       0.89      0.76      0.79       153
     weighted avg       0.86      0.84      0.82       153

```
### **Confustion matrix**
```
[[ 8  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  2  0  0  1  0  0  0]
 [ 0  0  3  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  1  0  0  0  0  0]
 [ 1  0  0  0 13  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  1 18  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 24  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 16  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  2  2  1  0  0  0  1]
 [ 0  0  0  0  0  0  0  0  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  4  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  4]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      1.00      0.91         5
Battery / Assault       0.82      0.90      0.86        10
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.40      0.50      0.44         4
             Drug       0.94      0.89      0.92        19
            Fraud       0.81      0.91      0.86        23
         Gambling       1.00      0.88      0.93         8
           Murder       0.83      0.91      0.87        22
National Security       0.83      1.00      0.90        19
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.91      0.83      0.87        12
      State Crime       1.00      0.50      0.67         8
 Theft / Burglary       1.00      0.92      0.96        12
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.86       153
        macro avg       0.88      0.79      0.81       153
     weighted avg       0.88      0.86      0.86       153

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  2  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  1 17  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  1 21  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  7  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 20  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 19  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  1  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  1  3  0  0  4  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0 11  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.86      0.75         7
Battery / Assault       0.70      0.78      0.74         9
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.75      0.75      0.75         4
             Drug       1.00      0.88      0.94        25
            Fraud       0.88      0.88      0.88        26
         Gambling       1.00      1.00      1.00         9
           Murder       0.85      0.92      0.88        25
National Security       0.93      0.93      0.93        14
        Non-crime       1.00      0.50      0.67         4
     Sexual Abuse       0.86      0.86      0.86         7
      State Crime       0.67      0.67      0.67         3
 Theft / Burglary       0.78      0.88      0.82         8
      Trafficking       0.89      0.80      0.84        10

         accuracy                           0.87       153
        macro avg       0.86      0.84      0.84       153
     weighted avg       0.88      0.87      0.87       153

```
### **Confustion matrix**
```
[[ 6  1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  1  0  0  0  0  0  0  0  0]
 [ 1  0  0  0 22  1  0  0  0  0  0  0  0  1]
 [ 0  0  0  1  0 23  0  0  0  0  0  0  2  0]
 [ 0  0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 1  1  0  0  0  0  0 23  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 13  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  1  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  6  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  7  0]
 [ 1  0  0  0  0  0  0  0  0  0  1  0  0  8]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      1.00      0.86         3
Battery / Assault       0.60      0.33      0.43         9
          Bribery       0.67      0.67      0.67         3
   Cyber Security       0.67      0.33      0.44         6
             Drug       0.74      0.91      0.82        22
            Fraud       0.87      0.83      0.85        24
         Gambling       1.00      0.75      0.86         8
           Murder       0.73      0.84      0.78        19
National Security       0.81      0.96      0.88        23
        Non-crime       1.00      1.00      1.00         3
     Sexual Abuse       0.90      0.82      0.86        11
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       0.93      0.93      0.93        14
      Trafficking       0.83      1.00      0.91         5

         accuracy                           0.81       153
        macro avg       0.75      0.74      0.73       153
     weighted avg       0.79      0.81      0.79       153

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  1  0  0  5  0  0  0  0  0  0]
 [ 0  0  2  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  2  0  0  0  0  0]
 [ 0  0  0  0 20  0  0  1  0  0  1  0  0  0]
 [ 0  0  1  0  3 20  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  6  0  0  0  0  0  1  0]
 [ 1  1  0  0  1  0  0 16  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 22  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  3  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  9  0  0  1]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0 13  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.71      0.83         7
Battery / Assault       0.88      0.78      0.82         9
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.67      0.33      0.44         6
             Drug       0.94      0.94      0.94        16
            Fraud       0.78      0.95      0.86        19
         Gambling       1.00      1.00      1.00         8
           Murder       0.90      1.00      0.95        38
National Security       0.78      0.95      0.86        19
     Sexual Abuse       0.90      0.82      0.86        11
      State Crime       0.67      0.40      0.50         5
 Theft / Burglary       1.00      1.00      1.00         9
      Trafficking       1.00      0.33      0.50         3

         accuracy                           0.88       153
        macro avg       0.89      0.76      0.80       153
     weighted avg       0.88      0.88      0.87       153

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  2  0  0  0  0]
 [ 0  0  0  0 15  1  0  0  0  0  0  0  0]
 [ 0  0  0  1  0 18  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 38  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  1  0  0]
 [ 0  1  0  0  0  1  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  1]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.90      0.95        10
Battery / Assault       1.00      0.50      0.67        14
          Bribery       0.75      0.60      0.67         5
   Cyber Security       0.75      1.00      0.86         3
             Drug       0.77      0.85      0.81        20
            Fraud       0.85      0.81      0.83        21
         Gambling       1.00      0.93      0.96        14
           Murder       0.69      0.90      0.78        20
National Security       0.80      0.94      0.86        17
     Sexual Abuse       0.86      1.00      0.92        12
      State Crime       1.00      0.33      0.50         6
 Theft / Burglary       0.78      0.88      0.82         8
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.83       153
        macro avg       0.87      0.82      0.82       153
     weighted avg       0.85      0.83      0.82       153

```
### **Confustion matrix**
```
[[ 9  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  5  0  1  0  1  0]
 [ 0  0  3  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  0  0  1  0  1  0  1  0]
 [ 0  0  1  1  2 17  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1 13  0  0  0  0  0  0]
 [ 0  0  0  0  2  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 16  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  2  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.83      0.91         6
Battery / Assault       0.71      0.50      0.59        10
          Bribery       0.88      0.78      0.82         9
   Cyber Security       0.50      0.40      0.44         5
             Drug       0.86      0.86      0.86        14
            Fraud       0.96      0.92      0.94        25
         Gambling       0.91      0.91      0.91        11
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
 [ 0  0  7  0  1  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  2  0  1  0  0  2  0  0  0  0  0]
 [ 0  1  0  0 12  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  1  0 23  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0 10  0  0  0  0  0  0  0]
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
Accident:                 0.86      0.90      0.86      6.80
Battery / Assault:        0.82      0.70      0.74     10.90
Bribery:                  0.93      0.71      0.79      4.20
Cyber Security:           0.61      0.59      0.54      3.90
Drug:                     0.91      0.89      0.89     18.40
Fraud:                    0.85      0.90      0.87     21.30
Gambling:                 0.99      0.93      0.96      9.50
Murder:                   0.82      0.92      0.86     26.70
National Security:        0.83      0.94      0.88     19.20
Sexual Abuse:             0.89      0.88      0.88     11.10
State Crime:              0.63      0.45      0.50      4.50
Theft / Burglary:         0.91      0.89      0.89      9.90
Trafficking:              0.93      0.84      0.86      4.70
Non-crime:                0.70      0.47      0.53      2.10

Accuracy                                      0.86    153.20
Weighted avg:             0.85      0.80      0.80    153.20
Macro avg:                0.87      0.86      0.85    153.20
```
