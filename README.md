# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         2
Battery / Assault       1.00      0.50      0.67         2
          Bribery       1.00      1.00      1.00         1
             Drug       1.00      0.94      0.97        17
            Fraud       1.00      1.00      1.00         8
         Gambling       1.00      1.00      1.00         3
           Murder       0.93      1.00      0.97        14
National Security       1.00      1.00      1.00         1
     Sexual Abuse       0.90      1.00      0.95         9
 Theft / Burglary       1.00      1.00      1.00         4

         accuracy                           0.97        61
        macro avg       0.98      0.94      0.95        61
     weighted avg       0.97      0.97      0.96        61

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  1  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0 16  0  0  0  0  1  0]
 [ 0  0  0  0  8  0  0  0  0  0]
 [ 0  0  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  0  0 14  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  4]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       1.00      1.00      1.00         2
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.50      1.00      0.67         1
             Drug       0.79      0.85      0.81        13
            Fraud       0.78      0.78      0.78         9
         Gambling       1.00      0.90      0.95        10
           Murder       1.00      1.00      1.00        10
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       1.00      1.00      1.00         8
 Theft / Burglary       1.00      1.00      1.00         1

         accuracy                           0.90        61
        macro avg       0.91      0.91      0.90        61
     weighted avg       0.91      0.90      0.90        61

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  0  0  0  0]
 [ 0  0  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 11  2  0  0  0  0  0]
 [ 0  0  0  1  1  7  0  0  0  0  0]
 [ 0  0  0  0  1  0  9  0  0  0  0]
 [ 0  0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.60      1.00      0.75         3
Battery / Assault       1.00      0.33      0.50         3
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.00      0.00      0.00         3
             Drug       0.82      0.88      0.85        16
            Fraud       0.60      1.00      0.75         3
         Gambling       0.57      1.00      0.73         4
           Murder       0.64      0.88      0.74         8
National Security       1.00      0.75      0.86         4
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      0.86      0.92         7
 Theft / Burglary       1.00      0.50      0.67         6
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.77        61
        macro avg       0.71      0.71      0.67        61
     weighted avg       0.77      0.77      0.74        61

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  1  0  0  0  0  0  0]
 [ 1  0  0  0 14  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  7  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  3  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  6  0  0]
 [ 0  0  0  0  2  0  1  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      1.00      0.89         4
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      0.50      0.67         2
             Drug       1.00      0.95      0.98        22
            Fraud       0.67      1.00      0.80         4
         Gambling       1.00      1.00      1.00         5
           Murder       0.75      0.75      0.75         8
        Non-crime       0.00      0.00      0.00         0
     Sexual Abuse       1.00      0.89      0.94         9
 Theft / Burglary       1.00      1.00      1.00         4
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.90        61
        macro avg       0.77      0.76      0.75        61
     weighted avg       0.92      0.90      0.90        61

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  0 21  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  6  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  8  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.60      0.67         5
Battery / Assault       0.00      0.00      0.00         2
          Bribery       1.00      1.00      1.00         3
   Cyber Security       1.00      1.00      1.00         1
             Drug       0.93      1.00      0.97        14
            Fraud       0.78      1.00      0.88         7
         Gambling       1.00      1.00      1.00         5
           Murder       0.62      1.00      0.77         5
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.80      0.89      0.84         9
 Theft / Burglary       1.00      0.67      0.80         6
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.85        61
        macro avg       0.82      0.76      0.77        61
     weighted avg       0.85      0.85      0.83        61

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  1  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  7  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  5  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  1  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  8  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  1]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       1.00      0.25      0.40         4
          Bribery       1.00      0.50      0.67         2
             Drug       1.00      1.00      1.00        13
            Fraud       0.67      0.57      0.62         7
         Gambling       1.00      0.67      0.80         3
           Murder       0.67      1.00      0.80        10
National Security       0.33      1.00      0.50         1
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.55      0.86      0.67         7
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       0.67      0.67      0.67         3
      Trafficking       0.50      0.50      0.50         2

         accuracy                           0.74        61
        macro avg       0.64      0.60      0.58        61
     weighted avg       0.75      0.74      0.71        61

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  1  0  0  0  0  2  0  0  1  0  0  0]
 [ 0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0 13  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  4  0  1  0  0  2  0  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0 10  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  6  0  0  1]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  2  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  1]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      1.00      0.86         3
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      0.75      0.86         4
             Drug       0.82      0.75      0.78        12
            Fraud       0.89      0.67      0.76        12
         Gambling       0.75      1.00      0.86         3
           Murder       0.85      0.92      0.88        12
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.89      1.00      0.94         8
 Theft / Burglary       0.50      0.67      0.57         3
      Trafficking       0.67      1.00      0.80         2

         accuracy                           0.82        61
        macro avg       0.74      0.80      0.76        61
     weighted avg       0.82      0.82      0.81        61

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  3  0  0  0  1  0  0  0  0]
 [ 0  0  0  9  1  0  0  0  0  1  1]
 [ 0  0  0  2  8  1  0  0  0  1  0]
 [ 0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  0 11  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  8  0  0]
 [ 1  0  0  0  0  0  0  0  0  2  0]
 [ 0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.62      0.77         8
Battery / Assault       0.00      0.00      0.00         4
          Bribery       1.00      0.50      0.67         2
             Drug       0.75      0.90      0.82        10
            Fraud       0.80      0.89      0.84         9
         Gambling       1.00      1.00      1.00         2
           Murder       0.64      1.00      0.78         7
National Security       1.00      1.00      1.00         3
     Sexual Abuse       0.70      1.00      0.82         7
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      1.00      1.00         5
      Trafficking       1.00      0.33      0.50         3

         accuracy                           0.79        61
        macro avg       0.74      0.69      0.68        61
     weighted avg       0.77      0.79      0.75        61

```
### **Confustion matrix**
```
[[5 1 0 0 0 0 2 0 0 0 0 0]
 [0 0 0 0 0 0 2 0 2 0 0 0]
 [0 0 1 0 1 0 0 0 0 0 0 0]
 [0 0 0 9 1 0 0 0 0 0 0 0]
 [0 0 0 1 8 0 0 0 0 0 0 0]
 [0 0 0 0 0 2 0 0 0 0 0 0]
 [0 0 0 0 0 0 7 0 0 0 0 0]
 [0 0 0 0 0 0 0 3 0 0 0 0]
 [0 0 0 0 0 0 0 0 7 0 0 0]
 [0 0 0 1 0 0 0 0 0 0 0 0]
 [0 0 0 0 0 0 0 0 0 0 5 0]
 [0 0 0 1 0 0 0 0 1 0 0 1]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       1.00      0.75      0.86         4
          Bribery       1.00      0.75      0.86         4
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.88      0.83      0.86        18
            Fraud       0.75      1.00      0.86         9
         Gambling       1.00      1.00      1.00         5
           Murder       0.73      1.00      0.84         8
     Sexual Abuse       0.50      0.33      0.40         3
 Theft / Burglary       0.50      1.00      0.67         1
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.84        61
        macro avg       0.85      0.77      0.78        61
     weighted avg       0.86      0.84      0.83        61

```
### **Confustion matrix**
```
[[ 4  0  0  0  1  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  0  1  0  0]
 [ 0  0  3  0  0  1  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  2  0  1  0]
 [ 0  0  0  0  0  9  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0]
 [ 0  0  0  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  1  0  1  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  1  0  0  0  0  0  1]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       1.00      0.67      0.80         3
          Bribery       1.00      0.50      0.67         2
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.70      0.88      0.78         8
            Fraud       0.62      0.80      0.70        10
         Gambling       0.80      0.80      0.80         5
           Murder       0.79      1.00      0.88        11
National Security       1.00      0.50      0.67         2
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.86      0.75      0.80         8
 Theft / Burglary       1.00      0.50      0.67         4

         accuracy                           0.79        61
        macro avg       0.90      0.71      0.77        61
     weighted avg       0.82      0.79      0.78        61

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  7  0  0  1  0  0  0  0]
 [ 0  0  0  0  1  8  0  0  0  0  1  0]
 [ 0  0  0  0  1  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 11  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  6  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  2]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.89      0.88      0.87      4.20
Battery / Assault:        0.60      0.35      0.42      2.60
Bribery:                  1.00      0.75      0.84      2.30
Cyber Security:           0.45      0.35      0.37      1.10
Drug:                     0.87      0.90      0.88     14.30
Fraud:                    0.75      0.87      0.80      7.80
Gambling:                 0.91      0.94      0.91      4.50
Murder:                   0.76      0.95      0.84      9.30
National Security:        0.43      0.42      0.40      1.10
Sexual Abuse:             0.82      0.86      0.83      7.50
State Crime:              0.00      0.00      0.00      0.30
Theft / Burglary:         0.87      0.80      0.80      3.70
Trafficking:              0.62      0.48      0.51      1.30
Non-crime:                0.40      0.32      0.35      1.00

Accuracy                                      0.84     61.00
Weighted avg:             0.81      0.76      0.76     61.00
Macro avg:                0.84      0.84      0.82     61.00
```
