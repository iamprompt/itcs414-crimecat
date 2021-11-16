# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.88      1.00      0.93         7
Battery / Assault       1.00      0.60      0.75        10
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.85      0.81      0.83        21
            Fraud       0.72      0.81      0.76        16
         Gambling       1.00      1.00      1.00         3
           Murder       0.66      0.95      0.78        20
National Security       1.00      1.00      1.00        16
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.92      0.86      0.89        14
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       0.86      0.75      0.80         8

         accuracy                           0.83       123
        macro avg       0.84      0.74      0.76       123
     weighted avg       0.84      0.83      0.82       123

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  1  0  1  0  0  1  0  1]
 [ 0  0  0  0  2 13  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 19  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 16  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  1  0  0  0]
 [ 1  0  0  0  0  0  0  1  0  0 12  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  0  6]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       0.60      0.30      0.40        10
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.50      0.50      0.50         2
             Drug       0.95      0.95      0.95        19
            Fraud       0.84      0.89      0.86        18
         Gambling       1.00      0.86      0.92         7
           Murder       0.77      1.00      0.87        23
National Security       0.89      0.94      0.91        17
     Sexual Abuse       0.71      0.71      0.71         7
      State Crime       0.67      0.40      0.50         5
 Theft / Burglary       1.00      1.00      1.00         5
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.85       123
        macro avg       0.84      0.79      0.81       123
     weighted avg       0.84      0.85      0.83       123

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  6  0  1  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0 18  1  0  0  0  0  0  0  0]
 [ 0  0  0  1  1 16  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  6  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 23  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 16  0  1  0  0]
 [ 0  1  0  0  0  1  0  0  0  5  0  0  0]
 [ 0  1  0  0  0  0  0  1  1  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  3]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.60      0.75         5
Battery / Assault       0.83      0.71      0.77         7
          Bribery       1.00      0.75      0.86         4
   Cyber Security       0.33      0.25      0.29         4
             Drug       0.94      1.00      0.97        17
            Fraud       0.86      0.92      0.89        13
         Gambling       1.00      0.86      0.92         7
           Murder       0.77      0.95      0.85        21
National Security       0.88      0.94      0.91        16
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.94      0.94      0.94        16
      State Crime       0.00      0.00      0.00         0
 Theft / Burglary       1.00      0.83      0.91         6
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.87       123
        macro avg       0.83      0.73      0.76       123
     weighted avg       0.88      0.87      0.87       123

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 17  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0 12  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 20  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 15  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  2  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0 15  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  5  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  3]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         6
Battery / Assault       0.83      0.50      0.62        10
          Bribery       1.00      0.50      0.67         4
   Cyber Security       1.00      0.33      0.50         6
             Drug       0.85      0.85      0.85        13
            Fraud       0.80      0.86      0.83        14
         Gambling       0.83      1.00      0.91         5
           Murder       0.78      0.97      0.87        30
National Security       0.81      0.93      0.87        14
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.88      1.00      0.93         7
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       1.00      1.00      1.00         8
      Trafficking       1.00      1.00      1.00         4

         accuracy                           0.85       123
        macro avg       0.91      0.83      0.85       123
     weighted avg       0.86      0.85      0.83       123

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  4  1  0  0  0  0  0]
 [ 0  0  2  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  2  0  0  0  0  0]
 [ 0  0  0  0 11  0  0  1  0  0  1  0  0  0]
 [ 0  0  0  0  1 12  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 29  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 13  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         5
Battery / Assault       0.71      0.71      0.71         7
          Bribery       1.00      0.60      0.75         5
   Cyber Security       1.00      0.67      0.80         3
             Drug       0.90      0.95      0.92        19
            Fraud       0.85      1.00      0.92        11
         Gambling       1.00      0.67      0.80         3
           Murder       0.84      0.96      0.90        28
National Security       0.73      1.00      0.85        11
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       1.00      0.80      0.89        10
      State Crime       1.00      0.25      0.40         4
 Theft / Burglary       0.75      0.75      0.75         8
      Trafficking       1.00      1.00      1.00         7

         accuracy                           0.86       123
        macro avg       0.84      0.74      0.76       123
     weighted avg       0.86      0.86      0.85       123

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  3  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 18  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0 11  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  1  0]
 [ 0  1  0  0  0  0  0 27  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 11  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  1  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  7]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      1.00      0.91         5
Battery / Assault       1.00      0.50      0.67         4
          Bribery       1.00      0.80      0.89         5
   Cyber Security       0.50      0.40      0.44         5
             Drug       0.80      0.94      0.86        17
            Fraud       0.75      0.86      0.80        14
         Gambling       1.00      0.67      0.80         3
           Murder       0.86      0.93      0.89        27
National Security       0.80      0.86      0.83        14
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       1.00      0.92      0.96        13
      State Crime       0.50      0.33      0.40         3
 Theft / Burglary       0.88      0.88      0.88         8
      Trafficking       0.00      0.00      0.00         2

         accuracy                           0.83       123
        macro avg       0.78      0.70      0.72       123
     weighted avg       0.83      0.83      0.82       123

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  4  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0 12  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  1  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  0  2  0  0 25  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 12  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 12  0  0  1]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  7  0]
 [ 1  0  0  0  1  0  0  0  0  0  0  0  0  0]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      0.75      0.80         8
Battery / Assault       0.80      0.57      0.67         7
          Bribery       1.00      1.00      1.00         4
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.95      0.91      0.93        22
            Fraud       0.92      0.86      0.89        14
         Gambling       1.00      1.00      1.00         4
           Murder       0.79      0.96      0.86        23
National Security       0.86      0.86      0.86        14
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.85      1.00      0.92        11
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.83      0.91        12
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.86       123
        macro avg       0.68      0.70      0.68       123
     weighted avg       0.86      0.86      0.86       123

```
### **Confustion matrix**
```
[[ 6  1  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  4  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 20  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  0 12  0  0  1  0  1  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 22  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 12  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  0  0  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 1  0  0  0  1  0  0  0  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      1.00      0.92         6
Battery / Assault       0.60      0.60      0.60         5
          Bribery       0.00      0.00      0.00         2
   Cyber Security       0.50      0.50      0.50         4
             Drug       0.75      0.82      0.78        11
            Fraud       0.79      0.88      0.83        17
         Gambling       1.00      1.00      1.00         6
           Murder       0.93      0.93      0.93        28
National Security       0.95      1.00      0.97        18
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.78      0.78      0.78         9
      State Crime       1.00      0.67      0.80         3
 Theft / Burglary       1.00      0.86      0.92         7
      Trafficking       0.80      0.80      0.80         5

         accuracy                           0.85       123
        macro avg       0.78      0.74      0.75       123
     weighted avg       0.84      0.85      0.85       123

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  9  0  0  0  0  0  1  0  0  1]
 [ 0  0  0  1  1 15  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 1  1  0  0  0  0  0 26  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  1  0  1  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  4]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      0.80      0.80         5
Battery / Assault       1.00      0.62      0.77         8
          Bribery       1.00      1.00      1.00         3
   Cyber Security       0.80      0.67      0.73         6
             Drug       0.83      0.77      0.80        13
            Fraud       0.82      0.88      0.85        16
         Gambling       1.00      1.00      1.00         9
           Murder       0.73      1.00      0.84        16
National Security       0.94      0.94      0.94        18
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.91      0.83      0.87        12
      State Crime       1.00      0.67      0.80         3
 Theft / Burglary       0.89      0.89      0.89         9
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.87       122
        macro avg       0.91      0.86      0.88       122
     weighted avg       0.88      0.87      0.87       122

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  2  0  0  1  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  4  0  2  0  0  0  0  0  0  0  0]
 [ 1  0  0  0 10  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  1 14  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 16  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 17  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.86      0.75         7
Battery / Assault       1.00      0.50      0.67        10
          Bribery       0.00      0.00      0.00         0
   Cyber Security       0.25      1.00      0.40         1
             Drug       0.92      0.92      0.92        24
            Fraud       1.00      0.88      0.93        16
         Gambling       0.75      1.00      0.86         3
           Murder       0.93      0.87      0.90        31
National Security       1.00      1.00      1.00         7
     Sexual Abuse       0.67      0.89      0.76         9
 Theft / Burglary       1.00      0.92      0.96        12
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.87       122
        macro avg       0.77      0.82      0.76       122
     weighted avg       0.91      0.87      0.88       122

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0]
 [ 2  5  0  0  0  0  0  1  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1 22  0  0  0  0  1  0  0]
 [ 0  0  0  2  0 14  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0]
 [ 1  0  1  0  2  0  0 27  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  8  0  0]
 [ 0  0  0  0  0  0  0  0  0  1 11  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.89      0.87      0.87      5.80
Battery / Assault:        0.84      0.56      0.66      7.80
Bribery:                  0.80      0.61      0.68      3.10
Cyber Security:           0.49      0.43      0.42      3.40
Drug:                     0.87      0.89      0.88     17.60
Fraud:                    0.84      0.88      0.86     14.90
Gambling:                 0.96      0.90      0.92      5.00
Murder:                   0.81      0.95      0.87     24.70
National Security:        0.89      0.95      0.91     14.50
Sexual Abuse:             0.86      0.87      0.86     10.80
State Crime:              0.62      0.43      0.49      2.10
Theft / Burglary:         0.94      0.87      0.90      8.30
Trafficking:              0.73      0.73      0.72      3.20
Non-crime:                0.60      0.42      0.48      1.60

Accuracy                                      0.85    122.80
Weighted avg:             0.82      0.76      0.77    122.80
Macro avg:                0.86      0.85      0.85    122.80
```
