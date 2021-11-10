# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.60      0.75         5
Battery / Assault       1.00      0.67      0.80         9
          Bribery       1.00      1.00      1.00         1
   Cyber Security       0.50      1.00      0.67         1
             Drug       0.91      0.77      0.83        13
            Fraud       0.91      0.77      0.83        13
         Gambling       1.00      1.00      1.00         5
           Murder       0.89      1.00      0.94        25
National Security       0.57      1.00      0.73         4
        Non-crime       0.33      1.00      0.50         1
     Sexual Abuse       0.88      0.88      0.88         8
      State Crime       1.00      0.33      0.50         3
 Theft / Burglary       1.00      0.86      0.92         7
      Trafficking       0.40      1.00      0.57         2

         accuracy                           0.85        97
        macro avg       0.81      0.85      0.78        97
     weighted avg       0.90      0.85      0.85        97

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  2]
 [ 0  6  0  0  0  0  0  1  1  1  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 10  1  0  0  0  0  1  0  0  1]
 [ 0  0  0  1  0 10  0  1  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 25  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.75      0.75         4
Battery / Assault       1.00      0.29      0.44         7
          Bribery       1.00      0.50      0.67         4
   Cyber Security       1.00      0.40      0.57         5
             Drug       0.77      0.89      0.83        19
            Fraud       0.79      0.85      0.81        13
         Gambling       0.80      0.80      0.80         5
           Murder       0.65      1.00      0.79        13
National Security       0.75      1.00      0.86         3
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       1.00      0.90      0.95        10
 Theft / Burglary       0.88      0.88      0.88         8
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.80        96
        macro avg       0.88      0.75      0.77        96
     weighted avg       0.84      0.80      0.79        96

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  2  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  1  0  0  0  0]
 [ 0  0  0  0 17  0  0  1  0  0  0  1  0]
 [ 0  0  0  0  2 11  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  4  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 13  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  9  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.75      0.86         8
Battery / Assault       0.80      0.67      0.73         6
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.67      0.40      0.50         5
             Drug       0.88      1.00      0.93        14
            Fraud       0.76      1.00      0.87        13
         Gambling       1.00      0.80      0.89         5
           Murder       0.94      1.00      0.97        16
National Security       1.00      1.00      1.00         5
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.87      0.81      0.84        16
 Theft / Burglary       0.67      1.00      0.80         2
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.88        96
        macro avg       0.81      0.80      0.80        96
     weighted avg       0.87      0.88      0.86        96

```
### **Confustion matrix**
```
[[ 6  0  0  0  1  0  0  1  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  0  0  0  2  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0 13  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 16  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  1  0  1  0  1  0  0  0  0 13  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.57      0.80      0.67         5
Battery / Assault       1.00      0.40      0.57         5
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.33      0.50      0.40         2
             Drug       0.91      0.91      0.91        23
            Fraud       0.89      0.94      0.91        17
         Gambling       1.00      1.00      1.00         5
           Murder       0.72      0.81      0.76        16
National Security       1.00      1.00      1.00         5
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       1.00      0.88      0.93         8
 Theft / Burglary       1.00      1.00      1.00         3
      Trafficking       0.67      1.00      0.80         2

         accuracy                           0.84        96
        macro avg       0.78      0.76      0.75        96
     weighted avg       0.85      0.84      0.84        96

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0]
 [ 1  0  0  0 21  0  0  1  0  0  0  0  0]
 [ 0  0  0  1  0 16  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0]
 [ 2  0  0  0  1  0  0 13  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  0  1  0  0  0  0  7  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         1
Battery / Assault       0.86      0.46      0.60        13
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.75      1.00      0.86         3
             Drug       0.88      0.88      0.88        16
            Fraud       0.88      0.82      0.85        17
         Gambling       0.83      1.00      0.91         5
           Murder       0.68      0.88      0.77        17
National Security       0.67      1.00      0.80         4
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.90      0.90      0.90        10
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       0.60      1.00      0.75         3
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.80        96
        macro avg       0.79      0.78      0.76        96
     weighted avg       0.81      0.80      0.79        96

```
### **Confustion matrix**
```
[[ 1  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  5  1  0  0  0  1  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  1  0  0  0  0  1  0  0  0]
 [ 0  0  0  1  0 14  1  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  0 15  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  1  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  1]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       0.60      0.75      0.67         4
          Bribery       1.00      1.00      1.00         3
   Cyber Security       1.00      0.40      0.57         5
             Drug       1.00      0.82      0.90        17
            Fraud       0.67      1.00      0.80        10
         Gambling       1.00      1.00      1.00         5
           Murder       0.92      0.96      0.94        23
National Security       1.00      0.67      0.80         6
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       1.00      0.88      0.93         8
      State Crime       0.00      0.00      0.00         0
 Theft / Burglary       0.86      0.86      0.86         7
      Trafficking       1.00      1.00      1.00         4

         accuracy                           0.88        96
        macro avg       0.86      0.81      0.82        96
     weighted avg       0.92      0.88      0.88        96

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  1  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  0 10  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 22  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      0.86      0.86         7
Battery / Assault       1.00      0.57      0.73         7
          Bribery       1.00      0.75      0.86         4
   Cyber Security       0.50      1.00      0.67         1
             Drug       0.74      0.88      0.80        16
            Fraud       0.89      0.80      0.84        10
         Gambling       0.75      1.00      0.86         3
           Murder       0.75      0.90      0.82        20
National Security       0.57      0.80      0.67         5
     Sexual Abuse       0.78      0.70      0.74        10
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       1.00      1.00      1.00         2
      Trafficking       0.83      0.62      0.71         8

         accuracy                           0.78        96
        macro avg       0.74      0.76      0.73        96
     weighted avg       0.78      0.78      0.77        96

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  3  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  1  1  0  0  0  0  0]
 [ 0  0  0  0  2  8  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 18  0  1  0  0  0]
 [ 0  0  0  1  0  0  0  0  4  0  0  0  0]
 [ 0  0  0  0  1  0  0  1  0  7  0  0  1]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2  0]
 [ 1  0  0  0  1  0  0  0  0  1  0  0  5]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      1.00      0.89         4
Battery / Assault       1.00      0.44      0.62         9
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.79      0.79      0.79        14
            Fraud       0.50      0.62      0.56         8
         Gambling       1.00      0.75      0.86         4
           Murder       0.62      0.93      0.74        14
National Security       0.88      1.00      0.93         7
        Non-crime       1.00      0.25      0.40         4
     Sexual Abuse       0.88      1.00      0.93        14
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.91      0.95        11
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.78        96
        macro avg       0.75      0.66      0.67        96
     weighted avg       0.82      0.78      0.77        96

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 11  1  0  1  0  0  1  0  0  0]
 [ 0  0  0  1  1  5  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  1  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 13  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  7  0  0  0  0  0]
 [ 1  0  0  0  0  1  0  1  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 14  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.62      0.77         8
Battery / Assault       0.80      0.80      0.80         5
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.50      0.67         2
             Drug       1.00      0.85      0.92        13
            Fraud       0.82      1.00      0.90         9
         Gambling       1.00      1.00      1.00         5
           Murder       0.75      0.95      0.84        22
National Security       0.57      1.00      0.73         4
     Sexual Abuse       0.80      0.89      0.84         9
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       1.00      0.67      0.80         9
      Trafficking       1.00      1.00      1.00         5

         accuracy                           0.84        96
        macro avg       0.83      0.79      0.79        96
     weighted avg       0.85      0.84      0.83        96

```
### **Confustion matrix**
```
[[ 5  1  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 11  0  0  1  0  1  0  0  0]
 [ 0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 21  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  0  1  0  2  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       0.33      0.40      0.36         5
          Bribery       0.00      0.00      0.00         1
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.87      1.00      0.93        13
            Fraud       0.88      0.93      0.90        15
         Gambling       1.00      0.83      0.91         6
           Murder       0.91      0.95      0.93        22
National Security       0.57      0.50      0.53         8
        Non-crime       1.00      1.00      1.00         2
     Sexual Abuse       0.75      0.86      0.80         7
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.78      0.88         9

         accuracy                           0.81        96
        macro avg       0.64      0.62      0.63        96
     weighted avg       0.81      0.81      0.81        96

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  2  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  1  0  0  0  0]
 [ 0  0  0  0 13  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0 14  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 21  0  0  0  0  0]
 [ 0  1  0  1  1  0  0  0  4  0  0  1  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  6  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  0  7]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.90      0.82      0.84      5.00
Battery / Assault:        0.84      0.54      0.63      7.00
Bribery:                  0.90      0.69      0.77      2.60
Cyber Security:           0.57      0.52      0.49      2.70
Drug:                     0.87      0.88      0.87     15.80
Fraud:                    0.80      0.87      0.83     12.50
Gambling:                 0.94      0.92      0.92      4.80
Murder:                   0.78      0.94      0.85     18.80
National Security:        0.76      0.90      0.80      5.10
Sexual Abuse:             0.88      0.87      0.87     10.00
State Crime:              0.10      0.03      0.05      1.30
Theft / Burglary:         0.90      0.89      0.88      6.10
Trafficking:              0.79      0.81      0.78      3.00
Non-crime:                0.53      0.47      0.46      1.40

Accuracy                                      0.83     96.10
Weighted avg:             0.79      0.76      0.75     96.10
Macro avg:                0.84      0.83      0.82     96.10
```
