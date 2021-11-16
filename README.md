# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      0.60      0.71        10
Battery / Assault       0.86      1.00      0.92         6
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.33      0.33      0.33         3
             Drug       0.94      0.94      0.94        17
            Fraud       0.95      0.81      0.88        26
         Gambling       1.00      1.00      1.00         4
           Murder       0.74      0.95      0.83        21
National Security       0.86      0.95      0.90        20
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.78      0.88      0.82         8
      State Crime       0.50      0.33      0.40         3
 Theft / Burglary       0.90      0.90      0.90        10
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.85       136
        macro avg       0.84      0.78      0.80       136
     weighted avg       0.86      0.85      0.85       136

```
### **Confustion matrix**
```
[[ 6  1  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  2  1 21  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0 20  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 19  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  3]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         3
Battery / Assault       0.60      0.60      0.60         5
          Bribery       1.00      1.00      1.00         1
   Cyber Security       0.67      1.00      0.80         2
             Drug       0.84      0.94      0.89        17
            Fraud       0.94      1.00      0.97        17
         Gambling       1.00      1.00      1.00         7
           Murder       0.86      0.91      0.88        33
National Security       0.89      0.89      0.89        19
     Sexual Abuse       1.00      0.86      0.92        14
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       1.00      0.85      0.92        13
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.89       136
        macro avg       0.83      0.82      0.82       136
     weighted avg       0.89      0.89      0.89       136

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0 17  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0]
 [ 0  2  0  0  1  0  0 30  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0 17  0  1  0  0]
 [ 0  0  0  1  0  0  0  1  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  1  0  0  1  0  0  0 11  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.90      1.00      0.95         9
Battery / Assault       0.91      0.67      0.77        15
          Bribery       1.00      0.50      0.67         4
   Cyber Security       1.00      0.17      0.29         6
             Drug       0.77      0.91      0.83        11
            Fraud       0.84      0.95      0.89        22
         Gambling       0.75      1.00      0.86         3
           Murder       0.79      0.85      0.81        26
National Security       0.65      1.00      0.79        13
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.83      1.00      0.91        10
      State Crime       0.00      0.00      0.00         5
 Theft / Burglary       1.00      1.00      1.00         8
      Trafficking       1.00      0.33      0.50         3

         accuracy                           0.82       136
        macro avg       0.82      0.74      0.73       136
     weighted avg       0.81      0.82      0.79       136

```
### **Confustion matrix**
```
[[ 9  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0 10  0  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  0  2  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  3  0  0  2  0  0  0  0  0]
 [ 0  0  0  0 10  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0 21  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 0  1  0  0  2  0  0 22  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 13  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  8  0]
 [ 1  0  0  0  0  0  0  0  0  0  1  0  0  1]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.50      0.67         4
Battery / Assault       1.00      0.80      0.89        10
          Bribery       1.00      0.67      0.80         3
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.93      0.88      0.90        16
            Fraud       0.83      0.90      0.86        21
         Gambling       1.00      0.88      0.93         8
           Murder       0.84      1.00      0.92        27
National Security       0.74      1.00      0.85        17
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.92      0.92      0.92        13
      State Crime       1.00      0.17      0.29         6
 Theft / Burglary       0.83      0.83      0.83         6
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.86       136
        macro avg       0.90      0.75      0.78       136
     weighted avg       0.88      0.86      0.85       136

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  8  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  1  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  1 19  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 27  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 17  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      1.00      0.80         2
Battery / Assault       0.86      0.60      0.71        10
          Bribery       1.00      0.67      0.80         3
   Cyber Security       1.00      0.50      0.67         6
             Drug       0.90      0.90      0.90        21
            Fraud       0.70      0.94      0.80        17
         Gambling       1.00      0.88      0.93         8
           Murder       0.77      0.95      0.85        21
National Security       0.89      0.89      0.89        18
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.92      1.00      0.96        12
      State Crime       0.50      0.33      0.40         3
 Theft / Burglary       1.00      0.70      0.82        10
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.84       135
        macro avg       0.87      0.78      0.80       135
     weighted avg       0.86      0.84      0.84       135

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  2  1  0  1  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  3  0  0  0  0  0  0  0  0]
 [ 1  0  0  0 19  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1 16  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 20  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 16  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 12  0  0  0]
 [ 0  1  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  3  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      1.00      0.91         5
Battery / Assault       0.67      0.67      0.67         6
          Bribery       1.00      0.67      0.80         6
   Cyber Security       0.50      0.50      0.50         4
             Drug       0.77      0.94      0.85        18
            Fraud       0.88      0.93      0.90        15
         Gambling       1.00      1.00      1.00         8
           Murder       0.94      0.97      0.95        31
National Security       0.86      1.00      0.92        18
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.83      0.71      0.77         7
      State Crime       1.00      0.33      0.50         3
 Theft / Burglary       1.00      0.71      0.83         7
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.87       135
        macro avg       0.81      0.73      0.75       135
     weighted avg       0.86      0.87      0.86       135

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  4  0  1  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 17  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  1  0 14  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0 30  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  1  0  0  0  0  0  0  5  0  0  0]
 [ 0  1  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  4]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         6
Battery / Assault       0.20      0.25      0.22         4
          Bribery       1.00      0.60      0.75         5
   Cyber Security       0.33      0.33      0.33         3
             Drug       0.95      0.75      0.84        24
            Fraud       0.83      1.00      0.91        20
         Gambling       1.00      1.00      1.00         5
           Murder       0.75      0.92      0.83        26
National Security       0.94      0.89      0.92        19
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.90      0.75      0.82        12
      State Crime       1.00      0.50      0.67         2
 Theft / Burglary       0.75      1.00      0.86         3
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.84       135
        macro avg       0.83      0.76      0.78       135
     weighted avg       0.86      0.84      0.84       135

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  3  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  1 18  0  0  4  0  0  0  0  1  0]
 [ 0  0  0  0  0 20  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 24  0  0  1  0  0  0]
 [ 0  1  0  1  0  0  0  0 17  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  2  0  0  0  0]
 [ 0  1  0  0  0  2  0  0  0  0  9  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.75      0.86         8
Battery / Assault       1.00      0.36      0.53        11
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.50      0.50      0.50         2
             Drug       0.93      1.00      0.97        14
            Fraud       0.93      0.87      0.90        30
         Gambling       1.00      1.00      1.00         7
           Murder       0.73      1.00      0.85        22
National Security       0.89      0.94      0.91        17
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.70      0.78      0.74         9
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.89      1.00      0.94         8
      Trafficking       0.00      0.00      0.00         0

         accuracy                           0.85       135
        macro avg       0.76      0.68      0.70       135
     weighted avg       0.88      0.85      0.85       135

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  4  0  0  0  0  0  5  0  0  2  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  1 26  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 22  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 16  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  1  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  7  0  0  1]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       0.83      0.62      0.71         8
          Bribery       1.00      1.00      1.00         1
   Cyber Security       0.60      0.60      0.60         5
             Drug       0.89      0.85      0.87        20
            Fraud       0.87      0.87      0.87        23
         Gambling       1.00      0.67      0.80         6
           Murder       0.78      1.00      0.88        21
National Security       0.88      0.94      0.91        16
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.92      1.00      0.96        12
      State Crime       1.00      0.33      0.50         3
 Theft / Burglary       1.00      1.00      1.00         7
      Trafficking       0.88      1.00      0.93         7

         accuracy                           0.87       135
        macro avg       0.83      0.76      0.78       135
     weighted avg       0.87      0.87      0.86       135

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  0  0  2  0  0  1  0  0  0]
 [ 0  0  0  1  2 20  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  1  4  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 21  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 15  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  7]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.50      0.60         6
Battery / Assault       0.80      0.50      0.62         8
          Bribery       0.75      1.00      0.86         3
   Cyber Security       0.50      1.00      0.67         1
             Drug       0.94      0.94      0.94        18
            Fraud       0.93      0.93      0.93        15
         Gambling       1.00      1.00      1.00         5
           Murder       0.74      0.95      0.83        21
National Security       0.86      0.96      0.91        25
     Sexual Abuse       0.92      0.92      0.92        12
      State Crime       0.50      0.20      0.29         5
 Theft / Burglary       0.89      0.73      0.80        11
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.85       135
        macro avg       0.81      0.80      0.79       135
     weighted avg       0.85      0.85      0.84       135

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  0  0  0  0  0  0  1  0]
 [ 0  0  0  1  0 14  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0 20  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 24  0  1  0  0]
 [ 0  1  0  0  0  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  1  0  0]
 [ 1  0  0  0  0  1  0  0  0  1  0  8  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  4]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.90      0.78      0.82      5.80
Battery / Assault:        0.77      0.61      0.66      8.30
Bribery:                  0.97      0.78      0.85      3.10
Cyber Security:           0.64      0.54      0.54      3.40
Drug:                     0.89      0.91      0.89     17.60
Fraud:                    0.87      0.92      0.89     20.60
Gambling:                 0.97      0.94      0.95      6.10
Murder:                   0.79      0.95      0.86     24.90
National Security:        0.85      0.95      0.89     18.20
Sexual Abuse:             0.87      0.88      0.87     10.90
State Crime:              0.55      0.22      0.30      3.30
Theft / Burglary:         0.93      0.87      0.89      8.30
Trafficking:              0.84      0.77      0.77      3.30
Non-crime:                0.60      0.38      0.46      1.60

Accuracy                                      0.85    135.40
Weighted avg:             0.83      0.76      0.77    135.40
Macro avg:                0.86      0.85      0.84    135.40
```
