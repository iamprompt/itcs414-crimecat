# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      1.00      0.80         2
Battery / Assault       1.00      0.50      0.67         4
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.50      0.67         2
             Drug       1.00      0.89      0.94        18
            Fraud       0.85      1.00      0.92        11
         Gambling       1.00      1.00      1.00         5
           Murder       0.90      1.00      0.95         9
National Security       1.00      1.00      1.00         2
     Sexual Abuse       0.85      1.00      0.92        11
 Theft / Burglary       1.00      1.00      1.00         3
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.92        71
        macro avg       0.94      0.87      0.88        71
     weighted avg       0.93      0.92      0.91        71

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  1  0  1  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0]
 [ 1  0  0  0 16  1  0  0  0  0  0  0]
 [ 0  0  0  0  0 11  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  9  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0]
 [ 0  0  0  0  0  0  0  0  0 11  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  1]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.80      0.73         5
Battery / Assault       0.00      0.00      0.00         5
          Bribery       1.00      0.50      0.67         2
   Cyber Security       1.00      1.00      1.00         1
             Drug       0.71      1.00      0.83        10
            Fraud       0.93      0.93      0.93        15
         Gambling       0.67      1.00      0.80         2
           Murder       0.64      1.00      0.78         7
National Security       1.00      0.80      0.89         5
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.91      1.00      0.95        10
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       1.00      0.67      0.80         3
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.82        71
        macro avg       0.82      0.75      0.75        71
     weighted avg       0.79      0.82      0.78        71

```
### **Confustion matrix**
```
[[ 4  0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 2  0  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 10  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1 14  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  7  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  4  0  0  0  0  0]
 [ 0  0  0  0  2  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  0  2  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  1]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.75      0.75         4
Battery / Assault       1.00      0.25      0.40         4
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.50      1.00      0.67         1
             Drug       1.00      0.91      0.95        23
            Fraud       0.86      0.75      0.80         8
         Gambling       0.83      1.00      0.91         5
           Murder       0.60      1.00      0.75         9
National Security       0.00      0.00      0.00         1
     Sexual Abuse       0.80      0.80      0.80        10
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.67      0.80         3
      Trafficking       0.00      0.00      0.00         0

         accuracy                           0.80        71
        macro avg       0.64      0.59      0.58        71
     weighted avg       0.84      0.80      0.80        71

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 21  0  0  1  0  1  0  0  0]
 [ 0  0  0  1  0  6  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  9  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  8  0  0  1]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  2  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.71      0.83         7
Battery / Assault       0.67      0.50      0.57         4
          Bribery       1.00      1.00      1.00         1
             Drug       0.64      0.82      0.72        11
            Fraud       0.80      1.00      0.89         8
         Gambling       1.00      0.67      0.80         6
           Murder       0.75      0.92      0.83        13
National Security       1.00      1.00      1.00         1
     Sexual Abuse       1.00      0.92      0.96        12
 Theft / Burglary       1.00      0.71      0.83         7
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.83        71
        macro avg       0.90      0.84      0.86        71
     weighted avg       0.86      0.83      0.83        71

```
### **Confustion matrix**
```
[[ 5  1  0  0  0  0  1  0  0  0  0]
 [ 0  2  0  0  0  0  2  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  9  1  0  1  0  0  0  0]
 [ 0  0  0  0  8  0  0  0  0  0  0]
 [ 0  0  0  1  1  4  0  0  0  0  0]
 [ 0  0  0  1  0  0 12  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  1  0  0  0  0 11  0  0]
 [ 0  0  0  2  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      0.80      0.80         5
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.00      0.00      0.00         1
             Drug       1.00      0.95      0.98        21
            Fraud       0.70      1.00      0.82         7
         Gambling       0.60      1.00      0.75         3
           Murder       0.93      0.88      0.90        16
National Security       1.00      1.00      1.00         1
     Sexual Abuse       0.86      0.86      0.86         7
 Theft / Burglary       1.00      0.71      0.83         7
      Trafficking       0.00      0.00      0.00         0

         accuracy                           0.87        71
        macro avg       0.72      0.72      0.70        71
     weighted avg       0.90      0.87      0.88        71

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  1]
 [ 0  2  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0 20  0  1  0  0  0  0  0]
 [ 0  0  0  0  7  0  0  0  0  0  0]
 [ 0  0  0  0  0  3  0  0  0  0  0]
 [ 1  0  0  0  0  0 14  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  1  0  6  0  0]
 [ 0  0  0  0  2  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      1.00      1.00         6
   Cyber Security       0.00      0.00      0.00         3
             Drug       0.82      0.75      0.78        12
            Fraud       0.75      0.92      0.83        13
         Gambling       1.00      1.00      1.00         5
           Murder       0.75      0.86      0.80         7
National Security       0.00      0.00      0.00         1
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.73      1.00      0.84         8
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       1.00      1.00      1.00         3
      Trafficking       1.00      0.50      0.67         4

         accuracy                           0.79        71
        macro avg       0.65      0.61      0.61        71
     weighted avg       0.77      0.79      0.77        71

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  6  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  9  2  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0 12  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  6  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  1  1  0  0  0  0  0  0  0  0  2]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.88      0.78      0.82         9
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.91      0.77      0.83        13
            Fraud       0.88      0.78      0.82         9
         Gambling       1.00      0.67      0.80         3
           Murder       0.59      0.91      0.71        11
National Security       0.50      1.00      0.67         1
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.67      0.89      0.76         9
 Theft / Burglary       0.86      0.75      0.80         8
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.77        70
        macro avg       0.71      0.70      0.68        70
     weighted avg       0.78      0.77      0.76        70

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0 10  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  7  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  1  0]
 [ 0  0  0  0  1  0  0 10  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  8  0  0]
 [ 1  0  0  0  0  1  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       0.00      0.00      0.00         2
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.94      1.00      0.97        15
            Fraud       0.87      1.00      0.93        13
         Gambling       1.00      1.00      1.00         7
           Murder       0.92      1.00      0.96        11
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.83      1.00      0.91        10
 Theft / Burglary       1.00      0.50      0.67         2
      Trafficking       1.00      0.67      0.80         3

         accuracy                           0.91        70
        macro avg       0.80      0.72      0.74        70
     weighted avg       0.88      0.91      0.89        70

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  1  0  0]
 [ 0  0  1  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  0  0  0  0  0]
 [ 0  0  0  0  0 13  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 11  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  0 10  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  2]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      1.00      0.89         4
Battery / Assault       1.00      0.50      0.67         2
          Bribery       1.00      0.67      0.80         3
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.78      1.00      0.88        14
            Fraud       0.81      0.81      0.81        16
         Gambling       1.00      1.00      1.00         3
           Murder       1.00      0.92      0.96        13
National Security       0.50      1.00      0.67         1
     Sexual Abuse       0.86      0.75      0.80         8
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      1.00      1.00         3

         accuracy                           0.86        70
        macro avg       0.81      0.76      0.76        70
     weighted avg       0.86      0.86      0.85        70

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  0]
 [ 0  0  0  0  3 13  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 12  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0]
 [ 1  0  0  0  0  1  0  0  0  6  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         1
Battery / Assault       1.00      0.67      0.80         3
          Bribery       0.00      0.00      0.00         1
   Cyber Security       1.00      1.00      1.00         2
             Drug       0.87      0.72      0.79        18
            Fraud       0.58      0.78      0.67         9
         Gambling       0.83      0.83      0.83         6
           Murder       0.79      1.00      0.88        11
National Security       1.00      0.50      0.67         2
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.77      0.83      0.80        12
 Theft / Burglary       0.50      0.50      0.50         2

         accuracy                           0.79        70
        macro avg       0.78      0.71      0.73        70
     weighted avg       0.80      0.79      0.78        70

```
### **Confustion matrix**
```
[[ 1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 13  0  0  2  0  0  2  1]
 [ 0  0  0  0  1  7  0  0  0  0  1  0]
 [ 0  0  0  0  1  0  5  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 11  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  2  0  0]
 [ 0  0  0  0  0  1  1  0  0  0 10  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  1]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.86      0.88      0.86      4.40
Battery / Assault:        0.47      0.24      0.31      2.60
Bribery:                  0.90      0.68      0.76      2.30
Cyber Security:           0.55      0.45      0.47      1.50
Drug:                     0.87      0.88      0.87     15.50
Fraud:                    0.80      0.90      0.84     10.90
Gambling:                 0.89      0.92      0.89      4.50
Murder:                   0.79      0.95      0.85     10.70
National Security:        0.60      0.63      0.59      1.50
Sexual Abuse:             0.83      0.90      0.86      9.70
State Crime:              0.10      0.10      0.10      0.50
Theft / Burglary:         0.94      0.75      0.82      4.10
Trafficking:              0.60      0.42      0.48      1.30
Non-crime:                0.40      0.25      0.30      1.10

Accuracy                                      0.84     70.60
Weighted avg:             0.78      0.73      0.73     70.60
Macro avg:                0.84      0.84      0.82     70.60
```
