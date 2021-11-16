# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       0.50      0.67      0.57         6
          Bribery       1.00      1.00      1.00         1
   Cyber Security       0.50      1.00      0.67         2
             Drug       1.00      0.81      0.90        16
            Fraud       0.89      0.89      0.89        18
         Gambling       1.00      0.89      0.94         9
           Murder       0.75      0.95      0.84        19
National Security       0.86      0.92      0.89        13
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.90      0.75      0.82        12
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       0.89      0.80      0.84        10
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.82       114
        macro avg       0.66      0.69      0.67       114
     weighted avg       0.83      0.82      0.82       114

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 13  1  0  2  0  0  0  0  0  0]
 [ 0  0  0  1  0 16  0  0  0  0  0  0  1  0]
 [ 0  1  0  0  0  0  8  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 18  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 12  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  1]
 [ 0  2  0  1  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  0]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.88      0.93         8
Battery / Assault       1.00      0.33      0.50         6
          Bribery       1.00      0.33      0.50         3
   Cyber Security       1.00      0.67      0.80         3
             Drug       0.73      0.89      0.80        18
            Fraud       0.50      0.67      0.57         9
         Gambling       1.00      0.50      0.67         2
           Murder       0.73      0.95      0.83        20
National Security       1.00      1.00      1.00        15
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.77      0.91      0.83        11
      State Crime       1.00      1.00      1.00         3
 Theft / Burglary       0.80      0.44      0.57         9
      Trafficking       1.00      0.67      0.80         3

         accuracy                           0.80       113
        macro avg       0.89      0.71      0.76       113
     weighted avg       0.83      0.80      0.79       113

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  2  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  1  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  1  0  0  1  0  0  0]
 [ 0  0  0  0  2  6  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 19  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 15  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  3  0  0]
 [ 0  0  0  0  1  3  0  1  0  0  0  0  4  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  2]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         6
Battery / Assault       1.00      0.62      0.77         8
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.50      0.50      0.50         2
             Drug       0.88      0.84      0.86        25
            Fraud       0.88      0.82      0.85        17
         Gambling       1.00      1.00      1.00         2
           Murder       0.70      1.00      0.82        16
National Security       1.00      1.00      1.00        11
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       1.00      0.82      0.90        11
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       1.00      0.83      0.91         6
      Trafficking       0.67      1.00      0.80         4

         accuracy                           0.87       113
        macro avg       0.90      0.85      0.86       113
     weighted avg       0.89      0.87      0.87       113

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 21  1  0  2  0  0  0  0  0  1]
 [ 0  0  0  1  2 14  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 16  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 11  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  9  0  0  1]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      1.00      0.86         3
Battery / Assault       1.00      0.67      0.80         9
          Bribery       1.00      1.00      1.00         3
   Cyber Security       0.50      0.20      0.29         5
             Drug       0.83      0.94      0.88        16
            Fraud       0.70      0.78      0.74         9
         Gambling       1.00      0.88      0.93         8
           Murder       0.80      0.89      0.84        18
National Security       0.95      0.95      0.95        21
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.71      0.71      0.71         7
      State Crime       0.50      1.00      0.67         1
 Theft / Burglary       0.88      1.00      0.93         7
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.85       113
        macro avg       0.83      0.84      0.82       113
     weighted avg       0.85      0.85      0.84       113

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  2  0  0  1  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  3  0  0  1  0  0  0  0  0]
 [ 0  0  0  1 15  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  7  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  1  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 16  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 20  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  7  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      1.00      0.86         3
Battery / Assault       1.00      0.57      0.73         7
          Bribery       1.00      0.80      0.89         5
   Cyber Security       0.50      0.40      0.44         5
             Drug       0.78      0.82      0.80        17
            Fraud       0.86      0.80      0.83        15
         Gambling       0.88      1.00      0.93         7
           Murder       0.82      0.88      0.85        16
National Security       0.81      0.93      0.87        14
     Sexual Abuse       0.82      0.82      0.82        11
      State Crime       1.00      0.67      0.80         3
 Theft / Burglary       0.90      1.00      0.95         9
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.83       113
        macro avg       0.85      0.82      0.83       113
     weighted avg       0.84      0.83      0.83       113

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  2  0  1  0  0  0]
 [ 0  0  4  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  1  0  0  0  0]
 [ 0  0  0  0 14  0  0  1  0  1  0  1  0]
 [ 0  0  0  1  1 12  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0]
 [ 0  0  0  0  2  0  0 14  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 13  0  0  0  0]
 [ 1  0  0  0  0  0  1  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       0.86      0.67      0.75         9
          Bribery       1.00      1.00      1.00         1
   Cyber Security       0.75      1.00      0.86         3
             Drug       0.92      0.86      0.89        14
            Fraud       1.00      1.00      1.00        18
         Gambling       1.00      1.00      1.00         4
           Murder       0.87      1.00      0.93        26
National Security       0.86      0.86      0.86        14
     Sexual Abuse       0.90      0.90      0.90        10
      State Crime       0.50      0.33      0.40         3
 Theft / Burglary       1.00      1.00      1.00         5
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.90       113
        macro avg       0.90      0.88      0.88       113
     weighted avg       0.90      0.90      0.90       113

```
### **Confustion matrix**
```
[[ 4  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 12  0  0  1  0  1  0  0  0]
 [ 0  0  0  0  0 18  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 26  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 12  0  1  0  0]
 [ 0  1  0  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.60      0.75      0.67         4
Battery / Assault       0.88      1.00      0.93         7
          Bribery       0.50      0.50      0.50         2
   Cyber Security       1.00      0.33      0.50         3
             Drug       0.94      0.84      0.89        19
            Fraud       0.62      0.89      0.73         9
         Gambling       1.00      1.00      1.00         5
           Murder       0.91      0.91      0.91        23
National Security       0.79      0.92      0.85        12
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.92      1.00      0.96        11
      State Crime       0.50      0.25      0.33         4
 Theft / Burglary       0.80      0.50      0.62         8
      Trafficking       1.00      1.00      1.00         5

         accuracy                           0.84       113
        macro avg       0.82      0.78      0.78       113
     weighted avg       0.85      0.84      0.83       113

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  1  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  0  8  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 1  1  0  0  0  0  0 21  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 11  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  1  0  0]
 [ 1  0  1  0  1  1  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.40      0.50         5
Battery / Assault       0.60      1.00      0.75         3
          Bribery       1.00      0.50      0.67         6
   Cyber Security       0.33      0.50      0.40         2
             Drug       0.91      0.91      0.91        23
            Fraud       0.80      0.80      0.80        15
         Gambling       0.86      1.00      0.92         6
           Murder       0.78      0.95      0.86        19
National Security       0.83      0.88      0.86        17
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      0.78      0.88         9
      State Crime       0.50      0.33      0.40         3
 Theft / Burglary       0.75      1.00      0.86         3
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.81       113
        macro avg       0.65      0.65      0.63       113
     weighted avg       0.81      0.81      0.80       113

```
### **Confustion matrix**
```
[[ 2  1  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  3  0  1  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 21  1  0  0  0  0  0  0  1  0]
 [ 0  0  0  2  0 12  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0 18  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0 15  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  0]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      1.00      0.86         6
Battery / Assault       1.00      0.23      0.38        13
          Bribery       0.75      1.00      0.86         3
   Cyber Security       0.67      0.50      0.57         4
             Drug       0.85      0.92      0.88        12
            Fraud       0.93      0.88      0.90        16
         Gambling       1.00      1.00      1.00         4
           Murder       0.75      0.91      0.82        23
National Security       0.79      1.00      0.88        11
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.78      1.00      0.88         7
 Theft / Burglary       1.00      1.00      1.00         5
      Trafficking       1.00      1.00      1.00         6

         accuracy                           0.83       113
        macro avg       0.87      0.83      0.81       113
     weighted avg       0.86      0.83      0.81       113

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  1  0  0  6  2  0  1  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  1  0  0  0  0]
 [ 1  0  0  0 11  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0 14  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 1  0  1  0  0  0  0 21  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 11  0  0  0  0]
 [ 0  0  0  0  1  0  0  1  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  7  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  6]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         9
Battery / Assault       0.75      0.60      0.67         5
          Bribery       1.00      0.75      0.86         4
   Cyber Security       0.67      0.50      0.57         4
             Drug       1.00      1.00      1.00        15
            Fraud       0.83      1.00      0.91        10
         Gambling       1.00      1.00      1.00         1
           Murder       0.79      0.96      0.87        24
National Security       0.85      1.00      0.92        11
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.87      0.93      0.90        14
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       1.00      0.70      0.82        10
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.88       113
        macro avg       0.91      0.85      0.87       113
     weighted avg       0.89      0.88      0.87       113

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0 10  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 23  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 11  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  1  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  3]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.85      0.85      0.84      5.20
Battery / Assault:        0.86      0.64      0.68      7.30
Bribery:                  0.93      0.79      0.83      3.00
Cyber Security:           0.64      0.56      0.56      3.30
Drug:                     0.88      0.88      0.88     17.50
Fraud:                    0.80      0.85      0.82     13.60
Gambling:                 0.97      0.93      0.94      4.80
Murder:                   0.79      0.94      0.86     20.40
National Security:        0.87      0.95      0.91     13.90
Sexual Abuse:             0.87      0.86      0.86     10.30
State Crime:              0.60      0.56      0.56      2.10
Theft / Burglary:         0.90      0.83      0.85      7.20
Trafficking:              0.77      0.72      0.73      3.10
Non-crime:                0.60      0.45      0.50      1.40

Accuracy                                      0.84    113.10
Weighted avg:             0.83      0.79      0.79    113.10
Macro avg:                0.85      0.84      0.84    113.10
```
