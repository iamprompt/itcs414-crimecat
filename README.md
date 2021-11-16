# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         5
Battery / Assault       0.50      0.29      0.36         7
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.50      0.33      0.40         6
             Drug       0.81      1.00      0.89        17
            Fraud       0.69      0.73      0.71        15
         Gambling       1.00      1.00      1.00         5
           Murder       0.81      0.94      0.87        18
National Security       0.86      0.86      0.86         7
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.67      0.67      0.67         6
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.88      0.78      0.82         9
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.79       104
        macro avg       0.76      0.72      0.73       104
     weighted avg       0.78      0.79      0.77       104

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  4  0  0  1  0  0  0]
 [ 0  0  2  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  3  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 17  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  2 11  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 17  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  6  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  1  0  1  0  0  0  0  0  0  4  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         6
Battery / Assault       1.00      0.38      0.55         8
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.00      0.00      0.00         0
             Drug       0.95      0.86      0.90        21
            Fraud       0.83      0.91      0.87        11
         Gambling       1.00      1.00      1.00         4
           Murder       0.60      1.00      0.75        15
National Security       0.73      0.89      0.80         9
        Non-crime       1.00      1.00      1.00         2
     Sexual Abuse       0.89      0.73      0.80        11
      State Crime       1.00      0.50      0.67         2
 Theft / Burglary       0.83      0.71      0.77         7
      Trafficking       0.75      0.75      0.75         4

         accuracy                           0.80       104
        macro avg       0.83      0.71      0.74       104
     weighted avg       0.86      0.80      0.80       104

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  4  1  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 18  0  0  1  0  0  1  0  1  0]
 [ 0  0  0  1  0 10  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 15  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  8  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  8  0  0  1]
 [ 0  0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  5  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  3]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.86      0.92         7
Battery / Assault       0.75      0.75      0.75         8
   Cyber Security       0.67      1.00      0.80         2
             Drug       0.73      0.67      0.70        12
            Fraud       0.88      0.94      0.91        16
         Gambling       1.00      0.80      0.89         5
           Murder       0.80      0.96      0.87        25
National Security       1.00      0.83      0.91         6
        Non-crime       1.00      0.50      0.67         4
     Sexual Abuse       0.75      0.75      0.75         8
      State Crime       1.00      0.50      0.67         2
 Theft / Burglary       1.00      1.00      1.00         4
      Trafficking       0.80      0.80      0.80         5

         accuracy                           0.84       104
        macro avg       0.88      0.80      0.82       104
     weighted avg       0.85      0.84      0.83       104

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  8  2  0  1  0  0  1  0  0  0]
 [ 0  0  0  1 15  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 24  0  0  1  0  0  0]
 [ 0  0  1  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  2  0  0  0  1]
 [ 0  1  0  0  0  0  1  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  4  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  4]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.50      0.67      0.57         3
Battery / Assault       0.50      0.17      0.25         6
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.50      0.33      0.40         3
             Drug       0.76      0.93      0.84        14
            Fraud       0.69      0.92      0.79        12
         Gambling       1.00      1.00      1.00         3
           Murder       0.87      0.90      0.88        29
National Security       1.00      1.00      1.00        11
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.80      0.89      0.84         9
 Theft / Burglary       1.00      0.71      0.83         7
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.82       104
        macro avg       0.82      0.73      0.75       104
     weighted avg       0.82      0.82      0.80       104

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  1  0  0  0  0  0  4  0  0  1  0  0]
 [ 0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  0 13  1  0  0  0  0  0  0  0]
 [ 0  0  0  1  0 11  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 1  1  0  0  1  0  0 26  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 11  0  0  0  0]
 [ 0  0  0  0  2  0  0  0  0  1  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  8  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         3
Battery / Assault       0.33      0.14      0.20         7
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.50      0.33      0.40         3
             Drug       0.89      0.94      0.91        17
            Fraud       0.85      0.85      0.85        13
         Gambling       1.00      0.83      0.91         6
           Murder       0.74      0.92      0.82        25
National Security       0.91      0.91      0.91        11
        Non-crime       0.00      0.00      0.00         0
     Sexual Abuse       0.86      0.67      0.75         9
      State Crime       0.00      0.00      0.00         0
 Theft / Burglary       0.71      0.83      0.77         6
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.80       104
        macro avg       0.70      0.61      0.64       104
     weighted avg       0.80      0.80      0.79       104

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  4  0  1  0  1  0  0]
 [ 0  0  1  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  1  0 11  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  1  0]
 [ 0  0  0  0  1  0  0 23  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 10  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  1  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      0.62      0.71         8
Battery / Assault       0.75      0.33      0.46         9
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.60      0.75         5
             Drug       0.88      1.00      0.94        15
            Fraud       0.90      0.82      0.86        11
         Gambling       1.00      0.83      0.91         6
           Murder       0.74      1.00      0.85        20
National Security       0.78      0.88      0.82         8
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.73      1.00      0.84         8
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      1.00      1.00         6
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.83       104
        macro avg       0.76      0.70      0.71       104
     weighted avg       0.83      0.83      0.81       104

```
### **Confustion matrix**
```
[[ 5  1  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  3  0  0  1  0  0  4  0  0  1  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  9  0  0  0  0  2  0  0  0]
 [ 0  0  0  0  1  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 20  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  7  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  6  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      0.71      0.77         7
Battery / Assault       1.00      0.75      0.86         4
          Bribery       1.00      0.50      0.67         2
   Cyber Security       1.00      0.67      0.80         3
             Drug       0.86      0.86      0.86        21
            Fraud       0.83      0.88      0.86        17
         Gambling       0.67      1.00      0.80         2
           Murder       0.85      0.89      0.87        19
National Security       1.00      0.88      0.93         8
     Sexual Abuse       0.85      1.00      0.92        11
      State Crime       0.00      0.00      0.00         0
 Theft / Burglary       0.80      0.80      0.80         5
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.86       104
        macro avg       0.82      0.75      0.77       104
     weighted avg       0.87      0.86      0.86       104

```
### **Confustion matrix**
```
[[ 5  0  0  0  1  0  0  1  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 18  0  0  1  0  1  0  1  0]
 [ 0  0  0  0  1 15  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 1  0  0  0  0  1  0 17  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  7  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  4]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         2
Battery / Assault       0.88      0.64      0.74        11
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.93      0.78      0.85        18
            Fraud       0.76      1.00      0.87        13
         Gambling       1.00      1.00      1.00         5
           Murder       0.68      0.94      0.79        16
National Security       0.67      1.00      0.80         6
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       1.00      1.00      1.00        13
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       1.00      0.67      0.80         9
      Trafficking       0.67      1.00      0.80         2

         accuracy                           0.84       104
        macro avg       0.83      0.79      0.78       104
     weighted avg       0.84      0.84      0.82       104

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  1  0  0  3  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  3  0  0  0  0  0  1]
 [ 0  0  0  0  0 13  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 15  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  6  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  3  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.50      1.00      0.67         3
Battery / Assault       0.33      0.25      0.29         4
          Bribery       1.00      1.00      1.00         4
   Cyber Security       0.80      0.67      0.73         6
             Drug       0.93      0.78      0.85        18
            Fraud       0.71      0.91      0.80        11
         Gambling       1.00      1.00      1.00         9
           Murder       0.81      0.89      0.85        19
National Security       0.85      1.00      0.92        11
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      1.00      1.00         9
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       1.00      0.80      0.89         5
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.84       104
        macro avg       0.71      0.74      0.71       104
     weighted avg       0.82      0.84      0.82       104

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  4  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  4  0  1  0  0  1  0  0  0  0  0]
 [ 1  0  0  0 14  2  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0 10  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 1  0  0  0  1  0  0 17  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 11  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  9  0  0  0]
 [ 0  2  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         6
Battery / Assault       1.00      0.86      0.92         7
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.50      0.50      0.50         2
             Drug       0.88      0.93      0.90        15
            Fraud       0.90      0.69      0.78        13
         Gambling       0.75      1.00      0.86         3
           Murder       0.62      1.00      0.77        10
National Security       0.85      1.00      0.92        11
     Sexual Abuse       0.94      0.88      0.91        17
      State Crime       1.00      0.75      0.86         4
 Theft / Burglary       1.00      1.00      1.00         8
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.86       103
        macro avg       0.88      0.82      0.84       103
     weighted avg       0.89      0.86      0.86       103

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0 14  0  0  1  0  0  0  0  0]
 [ 0  0  0  1  2  9  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 10  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 11  0  0  0  0]
 [ 0  0  0  0  0  0  1  1  0 15  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  3  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  3]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.87      0.79      0.80      5.00
Battery / Assault:        0.70      0.45      0.54      7.10
Bribery:                  0.90      0.63      0.73      2.60
Cyber Security:           0.65      0.49      0.54      3.20
Drug:                     0.86      0.87      0.86     16.80
Fraud:                    0.80      0.86      0.83     13.20
Gambling:                 0.94      0.95      0.94      4.80
Murder:                   0.75      0.94      0.83     19.60
National Security:        0.86      0.92      0.89      8.80
Sexual Abuse:             0.85      0.86      0.85     10.10
State Crime:              0.30      0.17      0.22      1.60
Theft / Burglary:         0.92      0.83      0.87      6.60
Trafficking:              0.92      0.89      0.90      3.10
Non-crime:                0.50      0.33      0.38      1.40

Accuracy                                      0.83    103.90
Weighted avg:             0.80      0.74      0.75    103.90
Macro avg:                0.84      0.83      0.82    103.90
```
