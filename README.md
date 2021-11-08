# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       1.00      0.25      0.40         4
          Bribery       1.00      1.00      1.00         3
   Cyber Security       0.00      0.00      0.00         1
             Drug       1.00      0.92      0.96        12
            Fraud       0.71      1.00      0.83         5
         Gambling       1.00      1.00      1.00         2
           Murder       0.73      1.00      0.84        16
National Security       0.80      0.80      0.80         5
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.90      1.00      0.95         9
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.88      0.93         8
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.86        73
        macro avg       0.72      0.69      0.69        73
     weighted avg       0.85      0.86      0.84        73

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  2  0  0  1  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 11  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  5  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 16  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      1.00      1.00         1
             Drug       0.78      0.78      0.78         9
            Fraud       0.77      0.91      0.83        11
         Gambling       0.89      1.00      0.94         8
           Murder       0.92      0.80      0.86        15
National Security       0.00      0.00      0.00         0
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.75      1.00      0.86        12
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.40      0.57         5
      Trafficking       0.67      0.67      0.67         3

         accuracy                           0.82        73
        macro avg       0.63      0.61      0.61        73
     weighted avg       0.81      0.82      0.80        73

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  7  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0 10  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 12  0  0  2  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  2  1  0  0  0  0  0  2  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  2]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      1.00      0.86         3
Battery / Assault       1.00      0.50      0.67         2
          Bribery       1.00      0.75      0.86         4
   Cyber Security       1.00      0.67      0.80         3
             Drug       0.83      0.88      0.86        17
            Fraud       0.78      1.00      0.88         7
         Gambling       0.83      0.83      0.83         6
           Murder       0.57      1.00      0.73         4
National Security       1.00      1.00      1.00         3
        Non-crime       1.00      0.40      0.57         5
     Sexual Abuse       1.00      0.85      0.92        13
 Theft / Burglary       1.00      1.00      1.00         5
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.85        73
        macro avg       0.87      0.84      0.82        73
     weighted avg       0.89      0.85      0.85        73

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  3  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0]
 [ 1  0  0  0 15  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  5  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  1  0  1  1  0  2  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0 11  0  1]
 [ 0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.50      0.57         4
Battery / Assault       1.00      0.33      0.50         3
   Cyber Security       1.00      1.00      1.00         1
             Drug       0.79      0.94      0.86        16
            Fraud       0.93      0.82      0.87        17
         Gambling       1.00      1.00      1.00         3
           Murder       0.67      1.00      0.80         8
National Security       1.00      0.75      0.86         4
     Sexual Abuse       0.67      0.75      0.71         8
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       1.00      0.86      0.92         7
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.82        73
        macro avg       0.81      0.75      0.76        73
     weighted avg       0.83      0.82      0.81        73

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  1  0  1  0  0  0]
 [ 0  1  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0 15  0  0  0  0  1  0  0  0]
 [ 0  0  0  2 14  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  1  0  1  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  6  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.71      1.00      0.83         5
Battery / Assault       1.00      0.50      0.67         4
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.94      0.83      0.88        18
            Fraud       0.88      0.93      0.90        15
         Gambling       0.50      0.50      0.50         2
           Murder       0.91      1.00      0.95        10
National Security       0.75      1.00      0.86         3
     Sexual Abuse       0.78      0.88      0.82         8
 Theft / Burglary       1.00      1.00      1.00         2
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.85        73
        macro avg       0.79      0.76      0.76        73
     weighted avg       0.85      0.85      0.84        73

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0]
 [ 2  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  0  0  0 15  0  1  1  0  1  0  0]
 [ 0  0  0  1  0 14  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 10  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  7  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  2  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  1]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.89      0.89      0.89         9
Battery / Assault       0.67      0.50      0.57         4
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.94      0.88      0.91        17
            Fraud       0.78      1.00      0.88         7
         Gambling       0.67      1.00      0.80         2
           Murder       0.85      0.85      0.85        13
National Security       0.67      1.00      0.80         2
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.80      0.89      0.84         9
 Theft / Burglary       1.00      0.75      0.86         4
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.85        73
        macro avg       0.79      0.83      0.80        73
     weighted avg       0.83      0.85      0.84        73

```
### **Confustion matrix**
```
[[ 8  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  1  0  0  0  0]
 [ 0  0  0  0 15  1  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 11  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  8  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       0.00      0.00      0.00         2
          Bribery       1.00      0.67      0.80         3
   Cyber Security       1.00      1.00      1.00         1
             Drug       1.00      0.88      0.93        16
            Fraud       0.78      0.78      0.78         9
         Gambling       0.75      0.75      0.75         4
           Murder       0.78      1.00      0.88        14
National Security       0.50      1.00      0.67         2
     Sexual Abuse       0.92      0.92      0.92        13
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       0.50      0.67      0.57         3

         accuracy                           0.84        73
        macro avg       0.69      0.72      0.69        73
     weighted avg       0.81      0.84      0.82        73

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  1  0  0  0  0  0  1]
 [ 0  0  0  0  0  7  1  1  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  1]
 [ 0  0  0  0  0  0  0 14  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0]
 [ 0  0  0  0  0  0  0  1  0 12  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  2]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.75      0.86         4
Battery / Assault       1.00      0.67      0.80         3
          Bribery       1.00      0.50      0.67         2
   Cyber Security       1.00      0.33      0.50         3
             Drug       0.94      0.94      0.94        17
            Fraud       0.82      1.00      0.90        14
         Gambling       0.83      0.83      0.83         6
           Murder       0.75      1.00      0.86         9
National Security       1.00      0.80      0.89         5
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       1.00      1.00      1.00         8
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.89        73
        macro avg       0.95      0.82      0.85        73
     weighted avg       0.91      0.89      0.88        73

```
### **Confustion matrix**
```
[[ 3  0  0  0  1  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  1  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  1  0  0  0  0]
 [ 0  0  0  0  0 14  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  5  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  9  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  4  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         2
Battery / Assault       0.00      0.00      0.00         2
          Bribery       0.00      0.00      0.00         2
   Cyber Security       1.00      1.00      1.00         1
             Drug       0.75      0.83      0.79        18
            Fraud       0.81      0.93      0.87        14
         Gambling       1.00      0.75      0.86         4
           Murder       0.75      1.00      0.86         9
National Security       0.80      1.00      0.89         4
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.67      0.86      0.75         7
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      1.00      1.00         2
      Trafficking       1.00      0.25      0.40         4

         accuracy                           0.79        72
        macro avg       0.70      0.65      0.65        72
     weighted avg       0.76      0.79      0.75        72

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 15  2  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  1 13  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  9  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  2  0]
 [ 0  0  0  0  1  0  0  0  0  0  2  0  0  1]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      1.00      0.89         4
Battery / Assault       0.00      0.00      0.00         2
          Bribery       1.00      0.33      0.50         3
             Drug       0.76      0.87      0.81        15
            Fraud       0.88      0.70      0.78        10
         Gambling       1.00      1.00      1.00         8
           Murder       0.90      0.75      0.82        12
National Security       0.67      1.00      0.80         2
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.64      0.90      0.75        10
 Theft / Burglary       1.00      1.00      1.00         5
      Trafficking       0.00      0.00      0.00         0

         accuracy                           0.81        72
        macro avg       0.64      0.63      0.61        72
     weighted avg       0.81      0.81      0.79        72

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0]
 [ 0  0  1  0  1  0  0  1  0  0  0  0]
 [ 0  0  0 13  0  0  0  0  0  1  0  1]
 [ 0  0  0  2  7  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  8  0  0  0  0  0  0]
 [ 1  0  0  1  0  0  9  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  9  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.88      0.89      0.88      4.40
Battery / Assault:        0.57      0.28      0.36      2.70
Bribery:                  0.80      0.62      0.68      2.30
Cyber Security:           0.60      0.50      0.53      1.50
Drug:                     0.87      0.87      0.87     15.50
Fraud:                    0.81      0.91      0.85     10.90
Gambling:                 0.85      0.87      0.85      4.50
Murder:                   0.78      0.94      0.84     11.00
National Security:        0.72      0.83      0.76      3.00
Sexual Abuse:             0.81      0.90      0.85      9.70
State Crime:              0.10      0.10      0.10      0.60
Theft / Burglary:         0.85      0.75      0.79      4.10
Trafficking:              0.62      0.54      0.54      1.40
Non-crime:                0.40      0.29      0.32      1.20

Accuracy                                      0.84     72.80
Weighted avg:             0.76      0.73      0.72     72.80
Macro avg:                0.84      0.84      0.82     72.80
```
