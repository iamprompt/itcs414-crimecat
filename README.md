# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       1.00      0.67      0.80         3
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.86      0.92      0.89        13
            Fraud       1.00      1.00      1.00        13
         Gambling       0.80      1.00      0.89         4
           Murder       0.91      0.91      0.91        11
National Security       0.67      0.80      0.73         5
     Sexual Abuse       0.92      1.00      0.96        11
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.75      0.60      0.67         5
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.89        73
        macro avg       0.76      0.76      0.76        73
     weighted avg       0.87      0.89      0.88        73

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0 12  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0 13  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 10  0  1  0  0  0]
 [ 0  0  0  0  1  0  0  0  4  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  1  0  1  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.75      0.86         4
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.50      0.33      0.40         3
             Drug       0.89      0.89      0.89        18
            Fraud       0.69      1.00      0.82         9
         Gambling       1.00      0.91      0.95        11
           Murder       0.77      1.00      0.87        10
National Security       0.67      0.67      0.67         3
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.80      0.80      0.80         5
 Theft / Burglary       1.00      0.80      0.89         5
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.84        73
        macro avg       0.64      0.63      0.63        73
     weighted avg       0.81      0.84      0.82        73

```
### **Confustion matrix**
```
[[ 3  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  1  0  0  0  0]
 [ 0  0  0  0 16  1  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1 10  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 10  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  2  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  4  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.89      1.00      0.94         8
Battery / Assault       1.00      0.40      0.57         5
             Drug       0.81      0.76      0.79        17
            Fraud       1.00      0.90      0.95        10
         Gambling       1.00      1.00      1.00         6
           Murder       0.60      0.90      0.72        10
National Security       1.00      1.00      1.00         2
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.75      1.00      0.86         6
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       1.00      1.00      1.00         3
      Trafficking       0.00      0.00      0.00         2

         accuracy                           0.83        72
        macro avg       0.84      0.79      0.79        72
     weighted avg       0.84      0.83      0.82        72

```
### **Confustion matrix**
```
[[ 8  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  3  0  0  0  0  0  0]
 [ 1  0 13  0  0  3  0  0  0  0  0  0]
 [ 0  0  1  9  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  9  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  1  0  0  0  0  0  1  0  0  0]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.88      0.93         8
Battery / Assault       0.00      0.00      0.00         5
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      0.67      0.80         3
             Drug       0.93      1.00      0.97        14
            Fraud       0.67      1.00      0.80         6
         Gambling       1.00      1.00      1.00         2
           Murder       0.60      1.00      0.75         9
National Security       1.00      0.67      0.80         3
     Sexual Abuse       0.82      0.90      0.86        10
 Theft / Burglary       1.00      0.71      0.83         7
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.83        72
        macro avg       0.83      0.80      0.80        72
     weighted avg       0.81      0.83      0.81        72

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  1  0  3  0  1  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  6  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  9  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  2  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  9  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  3]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.50      0.50      0.50         2
Battery / Assault       0.50      0.50      0.50         2
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.94      0.88      0.91        17
            Fraud       0.75      1.00      0.86         9
         Gambling       0.67      1.00      0.80         2
           Murder       1.00      0.86      0.92        14
National Security       1.00      1.00      1.00         3
     Sexual Abuse       0.88      1.00      0.93        14
 Theft / Burglary       1.00      1.00      1.00         4

         accuracy                           0.88        72
        macro avg       0.75      0.75      0.74        72
     weighted avg       0.88      0.88      0.87        72

```
### **Confustion matrix**
```
[[ 1  1  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  1  0]
 [ 0  0  2  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0 15  1  0  0  0  1  0]
 [ 0  0  0  0  0  9  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0]
 [ 1  0  0  0  1  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0]
 [ 0  0  0  0  0  0  0  0  0 14  0]
 [ 0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.60      0.67         5
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      1.00      1.00         6
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.92      0.85      0.88        13
            Fraud       0.73      0.85      0.79        13
         Gambling       0.75      1.00      0.86         3
           Murder       0.78      1.00      0.88         7
National Security       0.00      0.00      0.00         0
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.83      0.91      0.87        11
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.83      0.91         6
      Trafficking       0.50      0.50      0.50         2

         accuracy                           0.81        72
        macro avg       0.59      0.57      0.57        72
     weighted avg       0.79      0.81      0.79        72

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  6  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 11  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0 11  1  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  7  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 10  0  0  1]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.60      0.75         5
Battery / Assault       1.00      1.00      1.00         1
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      1.00      1.00         1
             Drug       0.93      0.88      0.90        16
            Fraud       0.89      0.89      0.89         9
         Gambling       1.00      0.50      0.67         4
           Murder       0.71      1.00      0.83        12
National Security       0.83      1.00      0.91         5
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.73      0.89      0.80         9
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.80      0.80      0.80         5
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.83        72
        macro avg       0.78      0.75      0.75        72
     weighted avg       0.82      0.83      0.81        72

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  1  0  0  1  0  0  0]
 [ 0  0  0  0  0  8  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  1  0  2  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 12  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         2
Battery / Assault       0.00      0.00      0.00         2
          Bribery       1.00      0.50      0.67         2
             Drug       0.89      1.00      0.94        17
            Fraud       1.00      0.80      0.89        15
         Gambling       1.00      1.00      1.00         6
           Murder       0.75      1.00      0.86         9
National Security       0.67      1.00      0.80         2
        Non-crime       0.50      1.00      0.67         1
     Sexual Abuse       0.92      0.92      0.92        12
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      1.00      1.00         1
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.89        72
        macro avg       0.75      0.79      0.75        72
     weighted avg       0.87      0.89      0.87        72

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  0  1  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0 17  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1 12  0  1  0  1  0  0  0  0]
 [ 0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  9  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.75      0.75         4
Battery / Assault       1.00      0.67      0.80         3
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.79      1.00      0.88        15
            Fraud       0.85      0.79      0.81        14
         Gambling       1.00      1.00      1.00         2
           Murder       0.93      0.93      0.93        14
National Security       0.75      1.00      0.86         3
     Sexual Abuse       0.88      0.78      0.82         9
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      1.00      1.00         3

         accuracy                           0.86        72
        macro avg       0.83      0.78      0.79        72
     weighted avg       0.86      0.86      0.85        72

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  2  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  0  0  0  0  0]
 [ 0  0  0  0  3 11  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 13  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0]
 [ 1  0  0  0  0  1  0  0  0  7  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       1.00      0.67      0.80         3
          Bribery       0.00      0.00      0.00         3
   Cyber Security       1.00      1.00      1.00         2
             Drug       0.86      0.80      0.83        15
            Fraud       0.64      0.82      0.72        11
         Gambling       0.67      0.80      0.73         5
           Murder       0.92      1.00      0.96        11
National Security       0.80      1.00      0.89         4
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.80      0.80      0.80        10
 Theft / Burglary       0.50      0.50      0.50         2

         accuracy                           0.81        72
        macro avg       0.77      0.75      0.75        72
     weighted avg       0.79      0.81      0.79        72

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  1  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 12  0  0  1  0  0  1  1]
 [ 0  0  0  0  1  9  0  0  0  0  1  0]
 [ 0  0  0  0  1  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 11  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  0  1  1  0  0  0  8  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  1]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.89      0.81      0.84      4.40
Battery / Assault:        0.55      0.39      0.45      2.60
Bribery:                  0.80      0.70      0.73      2.30
Cyber Security:           0.45      0.35      0.39      1.50
Drug:                     0.88      0.90      0.89     15.50
Fraud:                    0.82      0.90      0.85     10.90
Gambling:                 0.89      0.92      0.89      4.50
Murder:                   0.80      0.96      0.86     10.70
National Security:        0.74      0.81      0.76      3.00
Sexual Abuse:             0.83      0.90      0.86      9.70
State Crime:              0.10      0.10      0.10      0.60
Theft / Burglary:         0.91      0.82      0.86      4.10
Trafficking:              0.45      0.42      0.44      1.30
Non-crime:                0.35      0.27      0.28      1.10

Accuracy                                      0.85     72.20
Weighted avg:             0.75      0.74      0.73     72.20
Macro avg:                0.83      0.85      0.83     72.20
```
