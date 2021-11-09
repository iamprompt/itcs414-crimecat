# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         1
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      1.00      1.00         3
             Drug       0.93      0.87      0.90        15
            Fraud       0.93      1.00      0.97        14
         Gambling       0.78      0.88      0.82         8
           Murder       0.81      1.00      0.90        13
National Security       1.00      1.00      1.00         1
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       1.00      1.00      1.00        12
 Theft / Burglary       1.00      0.67      0.80         3
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.91        74
        macro avg       0.79      0.78      0.78        74
     weighted avg       0.88      0.91      0.89        74

```
### **Confustion matrix**
```
[[ 1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0]
 [ 0  0  0 13  0  1  1  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  7  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 13  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  1  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0 12  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  2  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.78      0.88         9
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      1.00      1.00         3
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.78      0.93      0.85        15
            Fraud       0.78      1.00      0.88         7
         Gambling       1.00      0.33      0.50         3
           Murder       0.89      0.94      0.91        17
National Security       0.00      0.00      0.00         1
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.91      1.00      0.95        10
 Theft / Burglary       1.00      1.00      1.00         3

         accuracy                           0.86        74
        macro avg       0.78      0.68      0.70        74
     weighted avg       0.87      0.86      0.85        74

```
### **Confustion matrix**
```
[[ 7  1  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  0 14  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  7  0  0  0  0  0  0]
 [ 0  0  0  0  2  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 16  0  0  1  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         3
Battery / Assault       1.00      0.20      0.33         5
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      0.50      0.67         2
             Drug       1.00      0.95      0.98        21
            Fraud       0.89      0.89      0.89         9
         Gambling       1.00      1.00      1.00         2
           Murder       0.50      0.83      0.62         6
National Security       0.83      1.00      0.91         5
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.75      1.00      0.86        12
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       1.00      0.60      0.75         5
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.85        74
        macro avg       0.93      0.83      0.84        74
     weighted avg       0.89      0.85      0.84        74

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  1  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 20  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  8  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  5  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  1  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      1.00      0.80         4
Battery / Assault       1.00      0.50      0.67         2
          Bribery       1.00      0.33      0.50         3
             Drug       0.83      0.83      0.83        18
            Fraud       0.69      1.00      0.82         9
         Gambling       1.00      1.00      1.00         7
           Murder       1.00      0.80      0.89        10
National Security       0.75      1.00      0.86         3
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.92      0.85      0.88        13
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.67      1.00      0.80         2
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.82        74
        macro avg       0.66      0.64      0.62        74
     weighted avg       0.83      0.82      0.81        74

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  1  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0 15  2  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  9  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 1  0  0  1  0  0  8  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]
 [ 1  0  0  1  0  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      1.00      0.86         3
Battery / Assault       1.00      0.25      0.40         4
          Bribery       1.00      0.60      0.75         5
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.90      0.90      0.90        21
            Fraud       0.80      0.92      0.86        13
         Gambling       0.00      0.00      0.00         1
           Murder       0.64      1.00      0.78         7
National Security       0.75      0.75      0.75         4
     Sexual Abuse       0.86      0.86      0.86         7
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.83      1.00      0.91         5
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.82        74
        macro avg       0.73      0.68      0.67        74
     weighted avg       0.83      0.82      0.80        74

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  2  0  1  0  0  0]
 [ 0  0  3  0  1  1  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0]
 [ 1  0  0  0 19  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  1 12  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0  7  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  3  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       1.00      0.33      0.50         3
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.64      0.88      0.74         8
            Fraud       0.88      0.82      0.85        17
         Gambling       0.83      0.83      0.83         6
           Murder       0.83      0.88      0.86        17
National Security       0.33      0.50      0.40         2
        Non-crime       1.00      1.00      1.00         2
     Sexual Abuse       1.00      1.00      1.00         5
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       1.00      1.00      1.00         4
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.82        74
        macro avg       0.75      0.73      0.73        74
     weighted avg       0.82      0.82      0.81        74

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  7  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  1 14  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  2  0  0 15  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         8
Battery / Assault       0.00      0.00      0.00         5
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.91      0.83      0.87        12
            Fraud       0.71      1.00      0.83         5
         Gambling       0.86      1.00      0.92         6
           Murder       0.71      0.92      0.80        13
National Security       1.00      1.00      1.00         4
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.80      1.00      0.89        12
 Theft / Burglary       0.75      1.00      0.86         3
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.82        74
        macro avg       0.60      0.64      0.60        74
     weighted avg       0.74      0.82      0.77        74

```
### **Confustion matrix**
```
[[ 8  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  4  0  0  1  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  1  0  0  0  0  0  0]
 [ 0  0  0  0 10  0  0  0  0  0  1  1  0]
 [ 0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 12  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 12  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         7
Battery / Assault       0.00      0.00      0.00         3
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      1.00      1.00         1
             Drug       0.88      1.00      0.93        14
            Fraud       0.93      0.87      0.90        15
         Gambling       0.75      1.00      0.86         3
           Murder       0.75      1.00      0.86         9
National Security       1.00      1.00      1.00         3
     Sexual Abuse       0.77      0.77      0.77        13
 Theft / Burglary       1.00      0.67      0.80         3
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.86        74
        macro avg       0.84      0.82      0.82        74
     weighted avg       0.84      0.86      0.85        74

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  2  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  0]
 [ 0  0  0  0  2 13  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  9  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0]
 [ 0  0  0  0  0  0  1  2  0 10  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  2  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  1]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         3
Battery / Assault       0.00      0.00      0.00         1
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.86      0.90      0.88        21
            Fraud       0.87      1.00      0.93        13
         Gambling       1.00      1.00      1.00         5
           Murder       0.79      1.00      0.88        11
National Security       0.86      1.00      0.92         6
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.67      0.67      0.67         3
 Theft / Burglary       1.00      0.57      0.73         7
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.86        74
        macro avg       0.75      0.69      0.71        74
     weighted avg       0.85      0.86      0.85        74

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0 19  0  0  1  0  0  1  0  0]
 [ 0  0  0  0 13  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 11  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  6  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  2  0  0]
 [ 0  0  0  2  1  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.70      1.00      0.82         7
Battery / Assault       1.00      0.33      0.50         3
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.00      0.00      0.00         3
             Drug       1.00      0.70      0.82        10
            Fraud       0.78      0.88      0.82         8
         Gambling       1.00      1.00      1.00         4
           Murder       0.67      1.00      0.80        12
National Security       0.50      1.00      0.67         1
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.82      0.90      0.86        10
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.83      0.91         6
      Trafficking       0.60      0.60      0.60         5

         accuracy                           0.78        74
        macro avg       0.65      0.64      0.61        74
     weighted avg       0.77      0.78      0.75        74

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  7  0  0  1  0  0  1  0  0  1]
 [ 0  0  0  0  0  7  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 12  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  9  0  0  1]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 1  0  0  0  0  0  0  0  0  0  1  0  0  3]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.91      0.91      0.90      4.90
Battery / Assault:        0.50      0.16      0.24      2.80
Bribery:                  0.90      0.71      0.77      2.30
Cyber Security:           0.50      0.30      0.37      1.50
Drug:                     0.87      0.88      0.87     15.50
Fraud:                    0.83      0.94      0.87     11.00
Gambling:                 0.82      0.80      0.79      4.50
Murder:                   0.76      0.94      0.83     11.50
National Security:        0.70      0.82      0.75      3.00
Sexual Abuse:             0.85      0.90      0.87      9.70
State Crime:              0.10      0.10      0.10      0.60
Theft / Burglary:         0.93      0.83      0.86      4.10
Trafficking:              0.66      0.61      0.63      1.40
Non-crime:                0.30      0.27      0.28      1.20

Accuracy                                      0.84     74.00
Weighted avg:             0.75      0.71      0.71     74.00
Macro avg:                0.83      0.84      0.82     74.00
```
