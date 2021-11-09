# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.86      0.92         7
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      0.75      0.86         4
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.85      0.85      0.85        13
            Fraud       0.83      0.94      0.88        16
         Gambling       1.00      0.75      0.86         4
           Murder       0.78      0.88      0.82         8
National Security       1.00      1.00      1.00         5
     Sexual Abuse       0.80      1.00      0.89         8
 Theft / Burglary       1.00      1.00      1.00         5
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.86        74
        macro avg       0.77      0.71      0.73        74
     weighted avg       0.86      0.86      0.86        74

```
### **Confustion matrix**
```
[[ 6  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  3  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0 11  1  0  1  0  0  0  0]
 [ 0  0  0  0  1 15  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  7  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  8  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  1]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.40      1.00      0.57         2
Battery / Assault       1.00      0.50      0.67         2
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.81      0.93      0.87        14
            Fraud       0.83      0.83      0.83        12
         Gambling       1.00      0.67      0.80         6
           Murder       1.00      0.93      0.96        14
National Security       1.00      1.00      1.00         4
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.89      1.00      0.94         8
 Theft / Burglary       0.80      1.00      0.89         4
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.86        74
        macro avg       0.90      0.82      0.82        74
     weighted avg       0.90      0.86      0.86        74

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0]
 [ 1  0  0  0 13  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  2 10  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  4  0  0  0  0  1  0]
 [ 1  0  0  0  0  0  0 13  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0]
 [ 1  0  0  0  1  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  8  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         3
Battery / Assault       1.00      0.50      0.67         2
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.93      0.93      0.93        14
            Fraud       0.89      0.89      0.89         9
         Gambling       1.00      1.00      1.00         6
           Murder       0.93      0.93      0.93        15
National Security       0.75      1.00      0.86         3
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.69      1.00      0.81        11
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      1.00      1.00         3
      Trafficking       0.00      0.00      0.00         2

         accuracy                           0.88        74
        macro avg       0.80      0.74      0.75        74
     weighted avg       0.86      0.88      0.86        74

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 13  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  8  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 14  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  1  0  0  0  0  0  1  0  0  0]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         2
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      1.00      1.00         1
             Drug       0.82      0.93      0.87        15
            Fraud       0.90      0.90      0.90        10
         Gambling       0.89      1.00      0.94         8
           Murder       0.85      0.85      0.85        13
National Security       1.00      1.00      1.00         4
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       1.00      0.82      0.90        17
      Trafficking       0.00      0.00      0.00         0

         accuracy                           0.88        74
        macro avg       0.79      0.75      0.76        74
     weighted avg       0.90      0.88      0.88        74

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  1]
 [ 0  0  0  0  1  9  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0]
 [ 0  0  0  0  2  0  0 11  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  1]
 [ 0  0  0  0  0  1  1  1  0  0 14  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         6
Battery / Assault       1.00      0.20      0.33         5
          Bribery       1.00      1.00      1.00         3
             Drug       1.00      0.88      0.94        17
            Fraud       0.83      0.91      0.87        11
         Gambling       0.75      1.00      0.86         3
           Murder       0.77      1.00      0.87        10
National Security       1.00      1.00      1.00         3
     Sexual Abuse       0.73      1.00      0.84         8
 Theft / Burglary       0.80      0.80      0.80         5
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.86        74
        macro avg       0.90      0.86      0.85        74
     weighted avg       0.89      0.86      0.85        74

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  2  0  0  0  0]
 [ 0  1  0  0  1  0  1  0  2  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0 15  0  1  0  0  0  1  0]
 [ 0  0  0  0 10  0  0  0  1  0  0]
 [ 0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  0 10  0  0  0  0]
 [ 0  0  0  0  0  0  0  3  0  0  0]
 [ 0  0  0  0  0  0  0  0  8  0  0]
 [ 0  0  0  0  1  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         6
Battery / Assault       0.00      0.00      0.00         2
          Bribery       1.00      0.75      0.86         4
             Drug       0.93      0.88      0.90        16
            Fraud       0.71      0.83      0.77        12
         Gambling       0.75      1.00      0.86         3
           Murder       0.74      1.00      0.85        14
National Security       0.00      0.00      0.00         1
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.67      1.00      0.80         6
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.43      0.60         7
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.80        74
        macro avg       0.68      0.66      0.65        74
     weighted avg       0.80      0.80      0.78        74

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  3  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0 14  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 10  0  0  0  0  2  0  0  0]
 [ 0  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 14  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  1  1  1  0  0  0  1  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.88      0.93         8
Battery / Assault       1.00      0.33      0.50         6
          Bribery       1.00      1.00      1.00         1
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.82      0.82      0.82        11
            Fraud       0.86      1.00      0.92        12
         Gambling       1.00      0.75      0.86         4
           Murder       0.60      1.00      0.75         9
National Security       0.38      0.75      0.50         4
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.78      0.78      0.78         9
      State Crime       0.00      0.00      0.00         4
 Theft / Burglary       1.00      1.00      1.00         1
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.75        73
        macro avg       0.64      0.66      0.62        73
     weighted avg       0.74      0.75      0.72        73

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  3  0  0  1  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  9  0  0  1  0  0  1  0  0  0]
 [ 0  0  0  0  0 12  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  9  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  3  0  0  0  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  7  0  0  1]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         6
Battery / Assault       1.00      1.00      1.00         1
          Bribery       1.00      0.33      0.50         3
   Cyber Security       0.00      0.00      0.00         3
             Drug       0.84      0.89      0.86        18
            Fraud       0.69      1.00      0.82         9
         Gambling       1.00      1.00      1.00         4
           Murder       0.88      0.88      0.88         8
National Security       0.67      1.00      0.80         2
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.92      1.00      0.96        11
 Theft / Burglary       1.00      1.00      1.00         5
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.86        73
        macro avg       0.77      0.74      0.73        73
     weighted avg       0.83      0.86      0.83        73

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  1  0  1  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  1  0  0  0  0]
 [ 0  0  0  0 16  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  7  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 11  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       1.00      0.50      0.67         4
          Bribery       0.00      0.00      0.00         1
   Cyber Security       1.00      0.67      0.80         3
             Drug       0.85      0.89      0.87        19
            Fraud       0.86      0.92      0.89        13
         Gambling       0.67      1.00      0.80         4
           Murder       0.60      1.00      0.75         9
National Security       0.80      1.00      0.89         4
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      0.50      0.67         4
 Theft / Burglary       1.00      0.50      0.67         6

         accuracy                           0.81        73
        macro avg       0.73      0.65      0.66        73
     weighted avg       0.83      0.81      0.79        73

```
### **Confustion matrix**
```
[[ 4  0  0  0  1  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 17  0  0  2  0  0  0  0]
 [ 0  0  0  0  0 12  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  9  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  2  0]
 [ 0  0  0  0  2  1  0  0  0  0  0  3]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      1.00      0.80         4
Battery / Assault       1.00      0.50      0.67         4
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.89      0.94      0.92        18
            Fraud       0.80      0.67      0.73         6
         Gambling       1.00      1.00      1.00         3
           Murder       0.62      0.91      0.74        11
     Sexual Abuse       0.80      0.80      0.80        15
 Theft / Burglary       0.80      0.80      0.80         5
      Trafficking       1.00      0.33      0.50         3

         accuracy                           0.79        73
        macro avg       0.78      0.68      0.69        73
     weighted avg       0.80      0.79      0.78        73

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  1  1  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0]
 [ 0  0  0  0 17  0  0  0  0  1  0]
 [ 0  0  0  0  1  4  0  1  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  0  0  0 10  1  0  0]
 [ 0  0  0  0  1  0  0  2 12  0  0]
 [ 1  0  0  0  0  0  0  0  0  4  0]
 [ 1  0  0  0  0  0  0  0  1  0  1]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.91      0.85      0.85      4.90
Battery / Assault:        0.70      0.35      0.45      2.80
Bribery:                  0.90      0.73      0.79      2.30
Cyber Security:           0.40      0.27      0.31      1.50
Drug:                     0.87      0.89      0.88     15.50
Fraud:                    0.82      0.89      0.85     11.00
Gambling:                 0.91      0.92      0.90      4.50
Murder:                   0.78      0.94      0.84     11.10
National Security:        0.66      0.78      0.70      3.00
Sexual Abuse:             0.83      0.89      0.84      9.70
State Crime:              0.00      0.00      0.00      0.60
Theft / Burglary:         0.84      0.75      0.78      4.10
Trafficking:              0.55      0.48      0.48      1.40
Non-crime:                0.50      0.33      0.38      1.20

Accuracy                                      0.84     73.60
Weighted avg:             0.78      0.73      0.73     73.60
Macro avg:                0.84      0.84      0.82     73.60
```
