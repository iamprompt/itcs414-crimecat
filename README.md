# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.62      1.00      0.77         5
Battery / Assault       1.00      1.00      1.00         1
          Bribery       1.00      0.40      0.57         5
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.73      0.79      0.76        14
            Fraud       0.75      1.00      0.86         9
         Gambling       1.00      0.83      0.91         6
           Murder       0.89      0.89      0.89         9
National Security       0.75      0.75      0.75         4
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       1.00      0.92      0.96        12
 Theft / Burglary       0.83      0.83      0.83         6
      Trafficking       0.75      1.00      0.86         3

         accuracy                           0.82        78
        macro avg       0.79      0.76      0.76        78
     weighted avg       0.83      0.82      0.81        78

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  2  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 1  0  0  0 11  1  0  0  0  0  0  0  1]
 [ 0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  1  0]
 [ 1  0  0  0  0  0  0  8  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  3  0  0  0  0]
 [ 1  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0 11  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.75      0.86         4
Battery / Assault       1.00      0.33      0.50         3
          Bribery       1.00      1.00      1.00         1
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.94      0.79      0.86        19
            Fraud       0.90      0.90      0.90        20
         Gambling       1.00      1.00      1.00         3
           Murder       0.80      1.00      0.89        12
National Security       1.00      1.00      1.00         4
     Sexual Abuse       0.71      1.00      0.83         5
 Theft / Burglary       0.80      1.00      0.89         4
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.87        77
        macro avg       0.85      0.81      0.81        77
     weighted avg       0.89      0.87      0.86        77

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  1  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0 15  1  0  1  0  1  1  0]
 [ 0  0  0  1  1 18  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 12  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  5  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.60      0.67         5
Battery / Assault       0.75      0.75      0.75         4
          Bribery       1.00      0.50      0.67         2
   Cyber Security       1.00      0.33      0.50         3
             Drug       0.89      0.94      0.91        17
            Fraud       0.67      0.86      0.75         7
         Gambling       1.00      0.67      0.80         6
           Murder       0.75      0.90      0.82        10
National Security       0.67      1.00      0.80         2
        Non-crime       1.00      1.00      1.00         2
     Sexual Abuse       0.79      0.92      0.85        12
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      1.00      1.00         4
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.82        77
        macro avg       0.80      0.71      0.73        77
     weighted avg       0.83      0.82      0.81        77

```
### **Confustion matrix**
```
[[ 3  1  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  6  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  2  0  4  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  9  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  1]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         3
Battery / Assault       1.00      0.33      0.50         3
          Bribery       1.00      1.00      1.00         1
             Drug       0.82      0.90      0.86        10
            Fraud       0.94      0.94      0.94        18
         Gambling       1.00      0.86      0.92         7
           Murder       0.94      0.88      0.91        17
National Security       1.00      1.00      1.00         3
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.71      1.00      0.83        10
 Theft / Burglary       1.00      1.00      1.00         3
      Trafficking       0.00      0.00      0.00         0

         accuracy                           0.88        77
        macro avg       0.87      0.76      0.79        77
     weighted avg       0.91      0.88      0.88        77

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  1  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  9  0  0  0  0  0  1  0  0]
 [ 0  0  0  1 17  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  6  0  0  0  0  0  0]
 [ 0  0  0  1  0  0 15  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  1]
 [ 0  0  0  0  0  0  0  0  0 10  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      1.00      0.91         5
Battery / Assault       1.00      0.25      0.40         4
          Bribery       1.00      0.60      0.75         5
             Drug       0.92      0.86      0.89        14
            Fraud       0.79      0.92      0.85        12
         Gambling       0.88      1.00      0.93         7
           Murder       0.78      0.88      0.82         8
National Security       1.00      0.80      0.89         5
     Sexual Abuse       0.80      1.00      0.89         8
 Theft / Burglary       0.83      0.83      0.83         6
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.86        77
        macro avg       0.89      0.83      0.83        77
     weighted avg       0.87      0.86      0.85        77

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  1  0  1  0  0]
 [ 0  0  3  0  2  0  0  0  0  0  0]
 [ 0  0  0 12  0  1  0  0  0  1  0]
 [ 0  0  0  0 11  0  0  0  1  0  0]
 [ 0  0  0  0  0  7  0  0  0  0  0]
 [ 0  0  0  1  0  0  7  0  0  0  0]
 [ 0  0  0  0  0  0  1  4  0  0  0]
 [ 0  0  0  0  0  0  0  0  8  0  0]
 [ 1  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       0.00      0.00      0.00         3
          Bribery       1.00      1.00      1.00         3
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.81      0.87      0.84        15
            Fraud       0.60      0.90      0.72        10
         Gambling       0.80      1.00      0.89         4
           Murder       0.80      1.00      0.89        12
National Security       1.00      1.00      1.00         2
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       1.00      0.86      0.92        14
 Theft / Burglary       1.00      0.50      0.67         6
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.83        77
        macro avg       0.85      0.78      0.79        77
     weighted avg       0.83      0.83      0.81        77

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 13  2  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 12  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  1  1  0  0  0 12  0  0]
 [ 0  0  0  0  1  2  0  0  0  0  0  3  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  1]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       0.50      0.14      0.22         7
          Bribery       1.00      1.00      1.00         3
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.89      0.94      0.91        17
            Fraud       0.90      1.00      0.95         9
         Gambling       1.00      1.00      1.00         1
           Murder       0.72      0.87      0.79        15
National Security       0.50      1.00      0.67         3
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.70      0.88      0.78         8
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       0.75      1.00      0.86         3
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.79        77
        macro avg       0.64      0.67      0.63        77
     weighted avg       0.74      0.79      0.75        77

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  4  0  0  2  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  9  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  0 13  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  1]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.92      0.96        13
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.87      0.87      0.87        15
            Fraud       0.73      1.00      0.84         8
         Gambling       1.00      1.00      1.00         4
           Murder       0.82      0.88      0.85        16
National Security       0.67      1.00      0.80         2
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.83      0.83      0.83         6
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      1.00      1.00         5
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.86        77
        macro avg       0.69      0.67      0.66        77
     weighted avg       0.85      0.86      0.85        77

```
### **Confustion matrix**
```
[[12  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0 13  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  8  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0 14  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  5  0  0  1]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       1.00      0.40      0.57         5
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.83      0.83      0.83        18
            Fraud       0.79      0.85      0.81        13
         Gambling       0.67      1.00      0.80         2
           Murder       0.53      1.00      0.70         8
National Security       0.75      1.00      0.86         3
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      0.89      0.94         9
      State Crime       1.00      0.50      0.67         2
 Theft / Burglary       1.00      0.75      0.86         8

         accuracy                           0.81        77
        macro avg       0.81      0.73      0.74        77
     weighted avg       0.84      0.81      0.80        77

```
### **Confustion matrix**
```
[[ 4  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  1 11  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  8  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  8  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  1  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  0  6]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      1.00      0.80         2
Battery / Assault       0.75      1.00      0.86         3
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.00      0.00      0.00         3
             Drug       0.89      0.89      0.89        18
            Fraud       0.80      0.67      0.73         6
         Gambling       0.88      1.00      0.93         7
           Murder       0.72      0.93      0.81        14
National Security       1.00      0.50      0.67         2
     Sexual Abuse       0.92      0.85      0.88        13
 Theft / Burglary       0.83      1.00      0.91         5
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.83        77
        macro avg       0.79      0.74      0.73        77
     weighted avg       0.81      0.83      0.81        77

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  2  0  0  0  0]
 [ 0  0  0  0 16  0  0  0  0  1  1  0]
 [ 0  0  0  0  1  4  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 13  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  1  0  0  0]
 [ 0  0  0  0  1  0  0  1  0 11  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  5  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  1]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.89      0.87      0.87      4.90
Battery / Assault:        0.70      0.42      0.48      3.30
Bribery:                  1.00      0.77      0.85      2.60
Cyber Security:           0.40      0.18      0.25      1.50
Drug:                     0.86      0.87      0.86     15.70
Fraud:                    0.79      0.90      0.83     11.20
Gambling:                 0.92      0.94      0.92      4.70
Murder:                   0.78      0.92      0.84     12.10
National Security:        0.83      0.91      0.84      3.00
Sexual Abuse:             0.85      0.91      0.87      9.70
State Crime:              0.10      0.05      0.07      0.60
Theft / Burglary:         0.91      0.89      0.88      5.00
Trafficking:              0.68      0.50      0.55      1.60
Non-crime:                0.40      0.30      0.33      1.20

Accuracy                                      0.84     77.10
Weighted avg:             0.80      0.75      0.75     77.10
Macro avg:                0.84      0.84      0.82     77.10
```
