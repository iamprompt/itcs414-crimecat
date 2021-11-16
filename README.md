# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.89      0.80      0.84        10
Battery / Assault       1.00      0.67      0.80         6
          Bribery       1.00      1.00      1.00         1
   Cyber Security       0.00      0.00      0.00         0
             Drug       0.93      0.87      0.90        15
            Fraud       1.00      1.00      1.00        14
         Gambling       1.00      1.00      1.00         4
           Murder       0.84      0.95      0.89        22
National Security       0.86      1.00      0.92         6
     Sexual Abuse       0.92      1.00      0.96        11
 Theft / Burglary       1.00      0.80      0.89         5
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.91        98
        macro avg       0.87      0.82      0.84        98
     weighted avg       0.92      0.91      0.91        98

```
### **Confustion matrix**
```
[[ 8  0  0  0  0  0  0  1  0  1  0  0]
 [ 0  4  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1 13  0  0  1  0  0  0  0]
 [ 0  0  0  0  0 14  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 21  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  0 11  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  3]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         5
Battery / Assault       0.80      0.36      0.50        11
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.90      0.75      0.82        12
            Fraud       0.91      0.83      0.87        12
         Gambling       1.00      1.00      1.00         3
           Murder       0.70      0.95      0.81        22
National Security       0.80      1.00      0.89         4
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.92      1.00      0.96        12
      State Crime       1.00      0.50      0.67         2
 Theft / Burglary       0.89      1.00      0.94         8
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.85        98
        macro avg       0.85      0.81      0.82        98
     weighted avg       0.85      0.85      0.83        98

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  7  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  9  0  0  2  0  0  1  0  0  0]
 [ 0  0  0  0  1 10  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 21  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.60      0.75         5
Battery / Assault       1.00      0.50      0.67        10
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.50      1.00      0.67         1
             Drug       0.88      0.88      0.88        17
            Fraud       0.89      0.73      0.80        11
         Gambling       1.00      1.00      1.00        12
           Murder       0.78      1.00      0.88        18
National Security       1.00      1.00      1.00         4
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.67      0.75      0.71         8
 Theft / Burglary       1.00      0.80      0.89         5
      Trafficking       0.57      1.00      0.73         4

         accuracy                           0.85        98
        macro avg       0.87      0.87      0.84        98
     weighted avg       0.88      0.85      0.84        98

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  2]
 [ 0  5  0  0  0  0  0  3  0  0  2  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 15  1  0  0  0  0  0  0  1]
 [ 0  0  0  1  1  8  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0 12  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  6  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.75      0.86         4
Battery / Assault       1.00      0.50      0.67         2
          Bribery       0.00      0.00      0.00         1
   Cyber Security       0.50      1.00      0.67         3
             Drug       0.90      0.90      0.90        20
            Fraud       0.90      0.82      0.86        22
         Gambling       0.83      1.00      0.91         5
           Murder       0.90      0.90      0.90        21
National Security       0.67      0.67      0.67         3
        Non-crime       1.00      1.00      1.00         3
     Sexual Abuse       0.88      1.00      0.93         7
 Theft / Burglary       0.86      0.86      0.86         7

         accuracy                           0.87        98
        macro avg       0.79      0.78      0.77        98
     weighted avg       0.87      0.87      0.86        98

```
### **Confustion matrix**
```
[[ 3  0  0  0  1  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 18  1  0  0  0  0  0  1]
 [ 0  0  0  2  0 18  1  0  1  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 19  0  0  1  0]
 [ 0  0  0  1  0  0  0  0  2  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  3  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  6]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.50      0.50      0.50         2
Battery / Assault       0.50      0.43      0.46         7
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.50      0.50      0.50         2
             Drug       0.94      0.94      0.94        17
            Fraud       0.82      0.90      0.86        10
         Gambling       1.00      1.00      1.00         2
           Murder       0.65      0.89      0.76        19
National Security       1.00      1.00      1.00         4
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.85      0.73      0.79        15
 Theft / Burglary       1.00      0.82      0.90        11
      Trafficking       0.75      0.75      0.75         4

         accuracy                           0.80        98
        macro avg       0.73      0.70      0.71        98
     weighted avg       0.79      0.80      0.79        98

```
### **Confustion matrix**
```
[[ 1  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  0  0  0  1  0  0]
 [ 0  0  0  1  0  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 1  1  0  0  0  0  0 17  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  1]
 [ 0  2  0  0  0  0  0  2  0  0 11  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  3]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      0.67      0.73         6
Battery / Assault       0.83      0.45      0.59        11
          Bribery       1.00      1.00      1.00         3
   Cyber Security       1.00      0.20      0.33         5
             Drug       0.77      0.91      0.83        11
            Fraud       0.62      0.91      0.74        11
           Murder       0.78      0.95      0.86        22
National Security       0.50      0.50      0.50         4
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.88      0.88      0.88         8
      State Crime       0.50      0.50      0.50         2
 Theft / Burglary       1.00      0.89      0.94         9
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.78        97
        macro avg       0.82      0.72      0.74        97
     weighted avg       0.81      0.78      0.77        97

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  4  1  0  1  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  4  0  0  0  0  0  0  0]
 [ 1  0  0  0 10  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1 10  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0 21  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  1  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       0.67      0.29      0.40         7
          Bribery       1.00      0.67      0.80         6
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.81      0.81      0.81        16
            Fraud       0.92      0.80      0.86        15
         Gambling       0.75      1.00      0.86         3
           Murder       0.68      1.00      0.81        17
National Security       0.67      0.86      0.75         7
        Non-crime       0.00      0.00      0.00         0
     Sexual Abuse       0.88      0.88      0.88         8
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       1.00      0.83      0.91         6
      Trafficking       1.00      0.67      0.80         3

         accuracy                           0.77        97
        macro avg       0.67      0.61      0.63        97
     weighted avg       0.79      0.77      0.77        97

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  0  4  0  1  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 13  1  0  2  0  0  0  0  0  0]
 [ 0  0  0  1  1 12  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 17  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  6  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  7  0  0  0]
 [ 0  1  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  2]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       1.00      0.50      0.67         4
          Bribery       1.00      0.25      0.40         4
   Cyber Security       1.00      0.50      0.67         6
             Drug       0.94      0.94      0.94        17
            Fraud       0.60      0.90      0.72        10
         Gambling       0.83      1.00      0.91         5
           Murder       0.75      1.00      0.86        15
National Security       1.00      1.00      1.00         7
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      0.93      0.97        15
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       1.00      1.00      1.00         4
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.87        97
        macro avg       0.87      0.77      0.79        97
     weighted avg       0.89      0.87      0.85        97

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  1  0  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  9  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 15  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  7  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0 14  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.80      0.73         5
Battery / Assault       0.80      0.67      0.73         6
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.67      0.40      0.50         5
             Drug       0.94      0.84      0.89        19
            Fraud       0.80      0.92      0.86        13
         Gambling       0.80      0.80      0.80         5
           Murder       0.80      0.94      0.86        17
National Security       0.89      0.89      0.89         9
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.78      1.00      0.88         7
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      1.00      1.00         3
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.84        97
        macro avg       0.80      0.75      0.76        97
     weighted avg       0.83      0.84      0.83        97

```
### **Confustion matrix**
```
[[ 4  1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  1  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  1  0  0  2  0  0  0]
 [ 0  0  0  1  0 12  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  4  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0 16  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  8  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       0.67      0.57      0.62         7
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.33      0.50         3
             Drug       0.68      0.93      0.79        14
            Fraud       0.75      0.82      0.78        11
         Gambling       0.86      0.67      0.75         9
           Murder       0.85      0.85      0.85        20
National Security       0.33      1.00      0.50         3
        Non-crime       0.00      0.00      0.00         3
     Sexual Abuse       0.67      0.44      0.53         9
      State Crime       0.00      0.00      0.00         4
 Theft / Burglary       0.75      1.00      0.86         6
      Trafficking       0.75      1.00      0.86         3

         accuracy                           0.73        97
        macro avg       0.66      0.69      0.65        97
     weighted avg       0.71      0.73      0.70        97

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  1  1  0  1  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 13  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  2  9  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  6  0  0  0  0  0  1  0]
 [ 0  1  0  0  1  0  0 17  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  1  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  1  1  1  1  0  0  4  0  0  1]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.89      0.77      0.82      5.00
Battery / Assault:        0.83      0.49      0.61      7.10
Bribery:                  0.90      0.71      0.77      2.60
Cyber Security:           0.52      0.39      0.38      2.70
Drug:                     0.87      0.88      0.87     15.80
Fraud:                    0.82      0.86      0.83     12.90
Gambling:                 0.81      0.85      0.82      4.80
Murder:                   0.77      0.95      0.85     19.30
National Security:        0.77      0.89      0.81      5.10
Sexual Abuse:             0.84      0.86      0.85     10.00
State Crime:              0.25      0.20      0.22      1.30
Theft / Burglary:         0.95      0.90      0.92      6.40
Trafficking:              0.81      0.79      0.78      3.10
Non-crime:                0.50      0.45      0.47      1.40

Accuracy                                      0.83     97.50
Weighted avg:             0.79      0.75      0.75     97.50
Macro avg:                0.84      0.83      0.82     97.50
```
