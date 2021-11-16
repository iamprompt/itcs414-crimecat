# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       0.80      0.62      0.70        13
          Bribery       0.50      1.00      0.67         1
   Cyber Security       0.33      0.50      0.40         2
             Drug       0.81      1.00      0.90        13
            Fraud       0.91      0.87      0.89        23
         Gambling       1.00      0.83      0.91         6
           Murder       0.89      0.94      0.91        33
National Security       0.80      0.86      0.83        14
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.91      1.00      0.95        10
      State Crime       0.80      0.67      0.73         6
 Theft / Burglary       1.00      0.83      0.91        12
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.87       142
        macro avg       0.84      0.84      0.83       142
     weighted avg       0.88      0.87      0.87       142

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  8  0  0  2  0  0  2  0  0  0  1  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 13  0  0  0  0  0  0  0  0  0]
 [ 0  0  1  1  1 20  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 31  0  0  1  0  0  0]
 [ 0  0  0  1  0  0  0  1 12  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  4  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      0.75      0.80         8
Battery / Assault       0.89      0.73      0.80        11
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.00      0.00      0.00         3
             Drug       0.88      0.83      0.86        18
            Fraud       0.87      0.91      0.89        22
         Gambling       1.00      0.83      0.91         6
           Murder       0.81      0.92      0.86        24
National Security       0.84      1.00      0.91        21
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.75      1.00      0.86         9
      State Crime       1.00      0.33      0.50         3
 Theft / Burglary       0.82      0.90      0.86        10
      Trafficking       0.67      0.50      0.57         4

         accuracy                           0.85       142
        macro avg       0.74      0.69      0.70       142
     weighted avg       0.83      0.85      0.83       142

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  8  0  0  0  0  0  2  0  0  1  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  1  0  0  0  0  0]
 [ 0  1  0  0 15  1  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  1 20  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  1  0]
 [ 1  0  0  0  1  0  0 22  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 21  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  1  2]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.91      0.91      0.91        11
Battery / Assault       1.00      1.00      1.00         6
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.50      0.33      0.40         3
             Drug       1.00      0.84      0.91        19
            Fraud       0.82      0.95      0.88        19
         Gambling       1.00      1.00      1.00         6
           Murder       0.79      1.00      0.88        23
National Security       0.95      0.95      0.95        22
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.78      0.78      0.78         9
      State Crime       0.67      0.67      0.67         3
 Theft / Burglary       1.00      0.85      0.92        13
      Trafficking       1.00      0.60      0.75         5

         accuracy                           0.89       142
        macro avg       0.89      0.81      0.84       142
     weighted avg       0.90      0.89      0.88       142

```
### **Confustion matrix**
```
[[10  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  2  0  0  1  0  0  0]
 [ 0  0  0  1  0 18  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 23  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 21  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  0 11  0]
 [ 1  0  0  0  0  0  0  0  0  0  1  0  0  3]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.75      0.86         4
Battery / Assault       0.64      0.53      0.58        17
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.20      0.33         5
             Drug       0.87      0.81      0.84        16
            Fraud       0.88      0.88      0.88        16
         Gambling       1.00      1.00      1.00         4
           Murder       0.75      0.93      0.83        29
National Security       0.68      0.94      0.79        16
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.94      0.94      0.94        16
      State Crime       0.50      0.25      0.33         4
 Theft / Burglary       1.00      1.00      1.00         7
      Trafficking       0.67      0.67      0.67         3

         accuracy                           0.80       142
        macro avg       0.85      0.73      0.75       142
     weighted avg       0.81      0.80      0.79       142

```
### **Confustion matrix**
```
[[ 3  1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  8  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  3  0  0  0  0  0]
 [ 0  1  0  0 13  1  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  1 14  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0 27  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 15  0  0  1  0  0]
 [ 0  1  0  0  0  0  0  0  1  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0 15  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  2]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         3
Battery / Assault       1.00      0.64      0.78        14
          Bribery       1.00      0.40      0.57         5
   Cyber Security       0.67      0.67      0.67         3
             Drug       0.88      0.92      0.90        24
            Fraud       0.79      0.96      0.87        24
         Gambling       1.00      0.83      0.91         6
           Murder       0.79      0.94      0.86        16
National Security       0.83      1.00      0.91        20
     Sexual Abuse       0.82      0.90      0.86        10
      State Crime       0.67      0.40      0.50         5
 Theft / Burglary       0.78      0.70      0.74        10
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.84       142
        macro avg       0.86      0.73      0.77       142
     weighted avg       0.85      0.84      0.83       142

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  1  1  2  1  0  0]
 [ 0  0  2  0  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 22  0  0  0  0  0  0  2  0]
 [ 0  0  0  0  1 23  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  5  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 15  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 20  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  2  0  0]
 [ 0  0  0  0  0  1  0  2  0  0  0  7  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  1]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.50      0.67      0.57         3
Battery / Assault       0.71      0.62      0.67         8
          Bribery       1.00      0.50      0.67         6
   Cyber Security       0.50      0.40      0.44         5
             Drug       0.81      0.87      0.84        15
            Fraud       0.67      0.89      0.76        18
         Gambling       1.00      1.00      1.00         8
           Murder       0.87      0.93      0.90        29
National Security       0.68      0.93      0.79        14
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.75      0.67      0.71         9
      State Crime       1.00      0.17      0.29         6
 Theft / Burglary       0.91      0.77      0.83        13
      Trafficking       1.00      1.00      1.00         6

         accuracy                           0.79       142
        macro avg       0.74      0.67      0.68       142
     weighted avg       0.80      0.79      0.77       142

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  3  0  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  2  0  3  0  0  0  0  0  0  0  0]
 [ 1  0  0  0 13  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  1  0 16  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0 27  0  0  1  0  0  0]
 [ 0  0  0  0  0  1  0  0 13  0  0  0  0  0]
 [ 0  0  0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  1  0  0  0  0  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  1  0  0]
 [ 0  0  0  0  1  2  0  0  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  6]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.88      0.88      0.88         8
Battery / Assault       0.67      0.57      0.62         7
          Bribery       0.80      0.80      0.80         5
   Cyber Security       0.67      0.50      0.57         4
             Drug       0.89      0.80      0.84        20
            Fraud       0.88      0.96      0.92        23
         Gambling       1.00      0.92      0.96        12
           Murder       0.80      0.92      0.86        26
National Security       0.95      0.91      0.93        23
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      0.83      0.91         6
      State Crime       0.50      0.67      0.57         3
 Theft / Burglary       0.67      1.00      0.80         2
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.86       142
        macro avg       0.76      0.77      0.76       142
     weighted avg       0.86      0.86      0.86       142

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  4  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  1  0  0  0  0  0]
 [ 0  1  0  1 16  0  0  1  0  0  0  0  1  0]
 [ 0  0  1  0  0 22  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1 11  0  0  0  0  0  0  0]
 [ 1  0  0  0  1  0  0 24  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 21  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  5  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  2  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         7
Battery / Assault       0.70      0.88      0.78         8
          Bribery       1.00      0.25      0.40         4
   Cyber Security       1.00      0.67      0.80         3
             Drug       0.92      0.80      0.86        15
            Fraud       0.90      0.90      0.90        20
         Gambling       0.90      1.00      0.95         9
           Murder       0.77      0.96      0.85        24
National Security       0.81      0.94      0.87        18
        Non-crime       1.00      0.67      0.80         6
     Sexual Abuse       1.00      0.77      0.87        13
      State Crime       1.00      0.50      0.67         8
 Theft / Burglary       0.86      1.00      0.92         6
      Trafficking       0.33      1.00      0.50         1

         accuracy                           0.85       142
        macro avg       0.87      0.81      0.80       142
     weighted avg       0.88      0.85      0.85       142

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  1  0  1  1  1  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 12  0  0  3  0  0  0  0  0  0]
 [ 0  0  0  0  0 18  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 23  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 17  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  4  0  0  0  1]
 [ 0  1  0  0  0  0  0  1  0  0 10  0  0  1]
 [ 0  1  0  0  0  0  0  0  3  0  0  4  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.83      0.91         6
Battery / Assault       1.00      0.71      0.83         7
          Bribery       1.00      0.75      0.86         4
   Cyber Security       0.50      0.40      0.44         5
             Drug       0.88      0.94      0.91        16
            Fraud       0.86      0.90      0.88        21
         Gambling       1.00      1.00      1.00        10
           Murder       0.81      1.00      0.90        22
National Security       0.90      0.90      0.90        20
     Sexual Abuse       1.00      0.92      0.96        12
      State Crime       0.75      0.75      0.75         4
 Theft / Burglary       1.00      1.00      1.00         9
      Trafficking       1.00      0.83      0.91         6

         accuracy                           0.89       142
        macro avg       0.90      0.84      0.87       142
     weighted avg       0.90      0.89      0.89       142

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  3  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  1  0  0  0  0]
 [ 0  0  0  0 15  0  0  1  0  0  0  0  0]
 [ 0  0  0  1  1 19  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 10  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 22  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 18  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  3  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  5]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.60      0.67         5
Battery / Assault       0.83      0.83      0.83         6
          Bribery       0.80      0.57      0.67         7
   Cyber Security       0.50      0.67      0.57         3
             Drug       0.91      0.91      0.91        22
            Fraud       0.86      0.83      0.84        23
         Gambling       0.80      1.00      0.89         4
           Murder       0.85      0.96      0.90        24
National Security       0.93      0.93      0.93        15
     Sexual Abuse       0.93      0.93      0.93        15
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.91      0.95        11
      Trafficking       1.00      1.00      1.00         5

         accuracy                           0.87       141
        macro avg       0.78      0.78      0.78       141
     weighted avg       0.87      0.87      0.87       141

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  4  0  1  2  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 20  0  0  1  0  1  0  0  0]
 [ 0  0  0  2  1 19  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0 23  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 14  0  1  0  0]
 [ 0  1  0  0  0  0  0  0  0 14  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.89      0.81      0.84      5.90
Battery / Assault:        0.82      0.71      0.76      9.70
Bribery:                  0.91      0.68      0.73      3.80
Cyber Security:           0.57      0.43      0.46      3.60
Drug:                     0.89      0.87      0.88     17.80
Fraud:                    0.84      0.90      0.87     20.90
Gambling:                 0.97      0.94      0.95      7.10
Murder:                   0.81      0.95      0.88     25.00
National Security:        0.84      0.94      0.88     18.30
Sexual Abuse:             0.89      0.87      0.88     10.90
State Crime:              0.69      0.44      0.50      4.30
Theft / Burglary:         0.90      0.90      0.89      9.30
Trafficking:              0.87      0.81      0.81      3.60
Non-crime:                0.40      0.27      0.31      1.70

Accuracy                                      0.85    141.90
Weighted avg:             0.82      0.77      0.78    141.90
Macro avg:                0.86      0.85      0.84    141.90
```
