# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.71      0.83      0.77         6
Battery / Assault       0.86      0.60      0.71        10
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.67      0.40      0.50         5
             Drug       1.00      0.76      0.87        17
            Fraud       0.74      1.00      0.85        17
         Gambling       1.00      1.00      1.00         4
           Murder       0.90      0.96      0.93        27
National Security       0.82      0.90      0.86        20
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.93      0.81      0.87        16
      State Crime       0.50      0.60      0.55         5
 Theft / Burglary       0.88      1.00      0.93         7
      Trafficking       0.80      1.00      0.89         4

         accuracy                           0.84       143
        macro avg       0.77      0.75      0.75       143
     weighted avg       0.84      0.84      0.83       143

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  2  0  0  1  1  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 13  2  0  0  0  0  0  0  1  1]
 [ 0  0  0  0  0 17  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0 26  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  0  1  0  0  0  0  0]
 [ 1  1  0  1  0  0  0  0  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  3  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       0.88      0.88      0.88         8
          Bribery       1.00      0.33      0.50         3
   Cyber Security       0.50      0.20      0.29         5
             Drug       0.85      0.79      0.81        14
            Fraud       0.81      0.87      0.84        30
         Gambling       1.00      1.00      1.00         3
           Murder       0.81      0.95      0.88        22
National Security       0.82      0.95      0.88        19
        Non-crime       1.00      0.50      0.67         4
     Sexual Abuse       0.80      0.92      0.86        13
      State Crime       0.50      0.25      0.33         4
 Theft / Burglary       0.89      0.89      0.89         9
      Trafficking       1.00      1.00      1.00         4

         accuracy                           0.83       143
        macro avg       0.85      0.74      0.76       143
     weighted avg       0.83      0.83      0.82       143

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  7  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  1  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  4  0  0  0  0  0  0  0  0]
 [ 0  1  0  0 11  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  0 26  0  1  0  0  2  0  1  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 21  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  1  2  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         6
Battery / Assault       0.88      0.54      0.67        13
          Bribery       1.00      1.00      1.00         4
   Cyber Security       0.75      0.75      0.75         4
             Drug       0.85      0.92      0.88        12
            Fraud       0.85      0.94      0.89        18
         Gambling       1.00      1.00      1.00        10
           Murder       0.72      0.96      0.83        27
National Security       1.00      0.93      0.97        15
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.86      0.86      0.86         7
      State Crime       1.00      0.75      0.86         4
 Theft / Burglary       1.00      0.81      0.90        16
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.87       143
        macro avg       0.92      0.84      0.87       143
     weighted avg       0.89      0.87      0.87       143

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  6  0  0  0  0  0  0]
 [ 0  0  4  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 11  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0 17  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 10  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 26  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 14  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  6  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  0  3  0  0]
 [ 0  0  0  0  0  1  0  2  0  0  0  0 13  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  4]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.88      1.00      0.93         7
Battery / Assault       0.89      0.80      0.84        10
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.00      0.00      0.00         0
             Drug       0.83      0.95      0.89        21
            Fraud       1.00      0.79      0.88        19
         Gambling       0.89      1.00      0.94         8
           Murder       0.82      0.90      0.86        20
National Security       0.72      1.00      0.84        18
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.93      0.93      0.93        14
      State Crime       0.00      0.00      0.00         7
 Theft / Burglary       1.00      0.89      0.94         9
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.85       143
        macro avg       0.78      0.73      0.74       143
     weighted avg       0.84      0.85      0.84       143

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  8  0  0  1  0  0  1  0  0  0  0  0  0]
 [ 0  0  2  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 20  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  2  1 15  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  0 18  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  7  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  8  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.86      0.92         7
Battery / Assault       1.00      0.40      0.57         5
          Bribery       0.67      1.00      0.80         2
   Cyber Security       0.50      0.25      0.33         4
             Drug       0.86      0.95      0.90        19
            Fraud       0.85      0.82      0.84        28
         Gambling       1.00      0.78      0.88         9
           Murder       0.83      1.00      0.91        29
National Security       1.00      0.93      0.97        15
     Sexual Abuse       0.90      1.00      0.95         9
      State Crime       0.80      1.00      0.89         4
 Theft / Burglary       0.67      0.80      0.73         5
      Trafficking       1.00      0.71      0.83         7

         accuracy                           0.87       143
        macro avg       0.85      0.81      0.81       143
     weighted avg       0.88      0.87      0.86       143

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0 18  0  0  1  0  0  0  0  0]
 [ 0  0  1  1  3 23  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  7  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 29  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 14  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  4  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  1  5]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.60      0.60      0.60         5
Battery / Assault       0.67      0.29      0.40         7
          Bribery       1.00      0.57      0.73         7
   Cyber Security       0.67      0.67      0.67         3
             Drug       0.89      0.84      0.86        19
            Fraud       0.79      0.88      0.83        17
         Gambling       0.83      1.00      0.91         5
           Murder       0.76      0.97      0.85        29
National Security       0.92      0.96      0.94        25
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.89      0.89      0.89         9
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       1.00      0.75      0.86        12
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.84       143
        macro avg       0.79      0.74      0.75       143
     weighted avg       0.84      0.84      0.83       143

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  4  1  0  0  0  0  0]
 [ 0  0  4  0  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  1  0  0  0  0  0]
 [ 1  1  0  0 16  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  1  1 15  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 28  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  1 24  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 1  0  0  0  1  1  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.88      0.78      0.82         9
Battery / Assault       0.71      0.62      0.67         8
          Bribery       0.75      0.50      0.60         6
   Cyber Security       1.00      0.67      0.80         3
             Drug       0.91      0.91      0.91        23
            Fraud       0.84      1.00      0.91        16
         Gambling       0.89      0.89      0.89         9
           Murder       0.81      0.88      0.84        24
National Security       0.83      0.95      0.88        20
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.67      0.86      0.75         7
      State Crime       1.00      0.25      0.40         4
 Theft / Burglary       1.00      1.00      1.00         6
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.85       143
        macro avg       0.88      0.77      0.80       143
     weighted avg       0.85      0.85      0.84       143

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  2  0  0  1  0  0  0]
 [ 0  0  3  0  0  2  1  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 21  0  0  0  0  0  2  0  0  0]
 [ 0  0  0  0  0 16  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  8  0  0  0  0  0  0  0]
 [ 0  1  1  0  1  0  0 21  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0 19  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  6  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.88      0.88      0.88         8
Battery / Assault       0.82      0.75      0.78        12
          Bribery       0.50      0.33      0.40         3
   Cyber Security       0.75      0.43      0.55         7
             Drug       0.80      0.86      0.83        14
            Fraud       0.75      0.90      0.82        20
         Gambling       1.00      0.89      0.94         9
           Murder       0.82      0.92      0.87        25
National Security       0.89      0.94      0.91        17
        Non-crime       1.00      1.00      1.00         2
     Sexual Abuse       1.00      0.83      0.91        12
      State Crime       0.33      0.50      0.40         2
 Theft / Burglary       1.00      0.80      0.89         5
      Trafficking       1.00      0.83      0.91         6

         accuracy                           0.84       142
        macro avg       0.82      0.78      0.79       142
     weighted avg       0.85      0.84      0.84       142

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  9  0  0  1  0  0  1  0  0  0  1  0  0]
 [ 0  0  1  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  3  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 12  1  0  1  0  0  0  0  0  0]
 [ 0  0  1  1  0 18  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  8  0  0  0  0  0  0  0]
 [ 1  1  0  0  0  0  0 23  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 16  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  5]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.50      0.67         2
Battery / Assault       0.86      0.60      0.71        10
          Bribery       1.00      0.75      0.86         4
   Cyber Security       1.00      1.00      1.00         1
             Drug       0.93      0.87      0.90        15
            Fraud       0.95      0.90      0.93        21
         Gambling       1.00      1.00      1.00         9
           Murder       0.96      0.96      0.96        26
National Security       0.86      0.95      0.90        20
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.80      0.92      0.86        13
      State Crime       0.80      0.67      0.73         6
 Theft / Burglary       0.86      1.00      0.92        12
      Trafficking       0.40      1.00      0.57         2

         accuracy                           0.89       142
        macro avg       0.82      0.79      0.79       142
     weighted avg       0.89      0.89      0.88       142

```
### **Confustion matrix**
```
[[ 1  1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  0  1  0  2  0  1  0]
 [ 0  0  3  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 13  0  0  0  0  0  0  0  1  1]
 [ 0  0  0  0  1 19  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 25  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 19  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  0  0  0  0  0  0 12  0  0  1]
 [ 0  0  0  0  0  0  0  0  2  0  0  4  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0 12  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      1.00      0.89         4
Battery / Assault       0.79      0.79      0.79        14
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.60      1.00      0.75         3
             Drug       0.92      0.96      0.94        24
            Fraud       0.84      0.91      0.87        23
         Gambling       1.00      0.80      0.89         5
           Murder       0.86      0.90      0.88        21
National Security       0.75      0.86      0.80        14
     Sexual Abuse       1.00      0.80      0.89        10
      State Crime       1.00      0.33      0.50         6
 Theft / Burglary       0.92      0.92      0.92        12
      Trafficking       1.00      0.67      0.80         3

         accuracy                           0.86       142
        macro avg       0.88      0.82      0.82       142
     weighted avg       0.87      0.86      0.85       142

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0 11  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1 23  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1 21  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  1  4  0  0  0  0  0  0]
 [ 1  1  0  0  0  0  0 19  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0 12  0  0  0  0]
 [ 0  2  0  0  0  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  2  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0 11  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  2]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.87      0.82      0.84      5.90
Battery / Assault:        0.83      0.63      0.70      9.70
Bribery:                  0.89      0.65      0.73      3.80
Cyber Security:           0.64      0.54      0.56      3.50
Drug:                     0.88      0.88      0.88     17.80
Fraud:                    0.84      0.90      0.87     20.90
Gambling:                 0.96      0.94      0.94      7.10
Murder:                   0.83      0.94      0.88     25.00
National Security:        0.86      0.94      0.89     18.30
Sexual Abuse:             0.88      0.88      0.88     11.00
State Crime:              0.69      0.54      0.57      4.30
Theft / Burglary:         0.92      0.89      0.90      9.30
Trafficking:              0.92      0.86      0.87      4.40
Non-crime:                0.50      0.32      0.38      1.70

Accuracy                                      0.85    142.70
Weighted avg:             0.84      0.78      0.79    142.70
Macro avg:                0.86      0.85      0.85    142.70
```
