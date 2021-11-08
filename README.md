# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       1.00      1.00      1.00         2
          Bribery       1.00      1.00      1.00         3
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.94      0.94      0.94        16
            Fraud       1.00      0.89      0.94         9
         Gambling       1.00      1.00      1.00         5
           Murder       1.00      1.00      1.00         8
National Security       0.67      1.00      0.80         4
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.94      1.00      0.97        15
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.75      1.00      0.86         3
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.93        73
        macro avg       0.74      0.77      0.75        73
     weighted avg       0.90      0.93      0.91        73

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  8  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  8  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 15  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       1.00      0.33      0.50         3
          Bribery       1.00      0.50      0.67         2
             Drug       0.94      1.00      0.97        15
            Fraud       0.92      0.79      0.85        14
         Gambling       0.67      1.00      0.80         4
           Murder       0.79      0.92      0.85        12
National Security       1.00      0.67      0.80         3
     Sexual Abuse       0.78      0.78      0.78         9
 Theft / Burglary       1.00      1.00      1.00         6
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.86        73
        macro avg       0.87      0.82      0.81        73
     weighted avg       0.88      0.86      0.86        73

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  1  0  1  0  0]
 [ 0  0  1  0  1  0  0  0  0  0  0]
 [ 0  0  0 15  0  0  0  0  0  0  0]
 [ 0  0  0  0 11  1  1  0  1  0  0]
 [ 0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  1  0  0 11  0  0  0  0]
 [ 0  0  0  0  0  0  1  2  0  0  0]
 [ 0  0  0  0  0  1  0  0  7  0  1]
 [ 0  0  0  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 3**
### **Classification_report**
```
                  precision    recall  f1-score   support

        Accident       1.00      0.67      0.80         3
         Bribery       0.00      0.00      0.00         2
            Drug       0.75      1.00      0.86        18
           Fraud       0.86      0.86      0.86         7
        Gambling       1.00      1.00      1.00         4
          Murder       0.94      0.89      0.91        18
       Non-crime       1.00      1.00      1.00         1
    Sexual Abuse       0.67      0.86      0.75         7
     State Crime       1.00      1.00      1.00         1
Theft / Burglary       1.00      0.86      0.92         7
     Trafficking       1.00      0.40      0.57         5

        accuracy                           0.85        73
       macro avg       0.84      0.78      0.79        73
    weighted avg       0.85      0.85      0.83        73

```
### **Confustion matrix**
```
[[ 2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0]
 [ 0  0 18  0  0  0  0  0  0  0  0]
 [ 0  0  1  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  1  0  0 16  0  1  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  1  0  0  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  1  0  0  0  0  0  0  6  0]
 [ 0  0  1  0  0  0  0  2  0  0  2]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      1.00      0.91         5
Battery / Assault       1.00      0.75      0.86         4
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.91      0.91      0.91        11
            Fraud       0.89      0.89      0.89         9
         Gambling       0.88      1.00      0.93         7
           Murder       0.83      1.00      0.91        15
National Security       0.50      0.67      0.57         3
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       1.00      0.71      0.83         7
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       1.00      1.00      1.00         2
      Trafficking       0.67      1.00      0.80         2

         accuracy                           0.86        73
        macro avg       0.82      0.79      0.79        73
     weighted avg       0.86      0.86      0.85        73

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 10  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  1  8  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 15  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  2  0  0  0  0]
 [ 1  0  0  0  0  0  0  1  0  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  2  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      1.00      0.80         2
Battery / Assault       1.00      0.33      0.50         3
          Bribery       1.00      0.60      0.75         5
   Cyber Security       1.00      1.00      1.00         1
             Drug       0.88      0.82      0.85        17
            Fraud       0.88      1.00      0.94        15
         Gambling       1.00      0.83      0.91         6
           Murder       0.56      1.00      0.71         5
National Security       1.00      1.00      1.00         3
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.91      0.91      0.91        11
 Theft / Burglary       1.00      1.00      1.00         2

         accuracy                           0.86        72
        macro avg       0.91      0.83      0.84        72
     weighted avg       0.89      0.86      0.86        72

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  3  0  1  1  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0]
 [ 1  0  0  0 14  0  0  1  0  0  1  0]
 [ 0  0  0  0  0 15  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  5  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  5  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      1.00      0.89         4
Battery / Assault       1.00      0.25      0.40         4
          Bribery       1.00      1.00      1.00         3
             Drug       0.86      1.00      0.92        12
            Fraud       1.00      0.94      0.97        17
         Gambling       1.00      0.67      0.80         3
           Murder       0.70      1.00      0.82         7
National Security       0.67      1.00      0.80         2
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       1.00      1.00      1.00         7
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.89      0.89      0.89         9
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.88        72
        macro avg       0.76      0.71      0.70        72
     weighted avg       0.88      0.88      0.86        72

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0 12  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1 16  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  1]
 [ 0  0  0  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  8  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.50      0.67         6
Battery / Assault       1.00      0.20      0.33         5
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      0.33      0.50         3
             Drug       0.88      0.82      0.85        17
            Fraud       0.75      0.92      0.83        13
         Gambling       1.00      0.80      0.89         5
           Murder       0.50      1.00      0.67         7
National Security       1.00      1.00      1.00         3
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.69      0.90      0.78        10
 Theft / Burglary       0.00      0.00      0.00         1

         accuracy                           0.76        72
        macro avg       0.73      0.62      0.63        72
     weighted avg       0.81      0.76      0.74        72

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  2  0  0  1  0]
 [ 0  1  0  0  0  0  0  2  0  0  2  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  2  0  0  1  0]
 [ 0  0  0  0  1 12  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  7  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  9  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      0.25      0.40         4
             Drug       1.00      0.94      0.97        16
            Fraud       0.83      1.00      0.91        10
         Gambling       0.86      1.00      0.92         6
           Murder       0.80      0.89      0.84         9
National Security       0.75      1.00      0.86         3
     Sexual Abuse       0.92      0.92      0.92        13
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.67      1.00      0.80         2
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.88        72
        macro avg       0.76      0.75      0.73        72
     weighted avg       0.88      0.88      0.86        72

```
### **Confustion matrix**
```
[[ 4  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  1  0  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0 10  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  8  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         6
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      1.00      1.00         3
   Cyber Security       1.00      0.50      0.67         2
             Drug       1.00      0.90      0.95        20
            Fraud       0.82      0.90      0.86        10
         Gambling       1.00      1.00      1.00         1
           Murder       0.86      1.00      0.92        12
National Security       0.75      1.00      0.86         3
     Sexual Abuse       0.75      1.00      0.86         9
 Theft / Burglary       1.00      0.50      0.67         4
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.89        72
        macro avg       0.76      0.73      0.73        72
     weighted avg       0.88      0.89      0.87        72

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  0  0  0]
 [ 0  0  0  0 18  1  0  1  0  0  0  0]
 [ 0  0  0  0  0  9  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 12  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  9  0  0]
 [ 0  0  0  0  0  1  0  0  0  1  2  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      0.83      0.83         6
Battery / Assault       1.00      0.33      0.50         3
          Bribery       1.00      0.50      0.67         2
   Cyber Security       1.00      1.00      1.00         2
             Drug       0.82      0.69      0.75        13
            Fraud       0.56      1.00      0.71         5
         Gambling       0.80      1.00      0.89         4
           Murder       0.93      0.93      0.93        15
National Security       1.00      1.00      1.00         6
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.75      1.00      0.86         9
 Theft / Burglary       1.00      0.80      0.89         5

         accuracy                           0.83        72
        macro avg       0.81      0.76      0.75        72
     weighted avg       0.84      0.83      0.82        72

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  2  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  9  2  1  0  0  0  1  0]
 [ 0  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 14  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  6  0  0  0]
 [ 1  0  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  4]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.91      0.88      0.88      4.40
Battery / Assault:        0.70      0.32      0.41      2.60
Bribery:                  0.90      0.76      0.81      2.30
Cyber Security:           0.60      0.36      0.42      1.50
Drug:                     0.90      0.90      0.90     15.50
Fraud:                    0.85      0.92      0.87     10.90
Gambling:                 0.92      0.93      0.91      4.50
Murder:                   0.79      0.96      0.86     10.80
National Security:        0.73      0.83      0.77      3.00
Sexual Abuse:             0.84      0.91      0.87      9.70
State Crime:              0.10      0.10      0.10      0.60
Theft / Burglary:         0.83      0.80      0.80      4.10
Trafficking:              0.42      0.44      0.40      1.30
Non-crime:                0.40      0.27      0.31      1.20

Accuracy                                      0.86     72.40
Weighted avg:             0.80      0.76      0.75     72.40
Macro avg:                0.87      0.86      0.85     72.40
```
