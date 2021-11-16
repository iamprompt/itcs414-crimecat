# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.71      0.83         7
Battery / Assault       0.50      0.80      0.62         5
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.67      1.00      0.80         2
             Drug       0.86      0.86      0.86        21
            Fraud       1.00      0.90      0.95        10
         Gambling       1.00      1.00      1.00         1
           Murder       0.71      0.83      0.77        24
National Security       0.85      0.85      0.85        13
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.92      0.92      0.92        13
      State Crime       0.67      0.67      0.67         3
 Theft / Burglary       1.00      0.78      0.88         9
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.82       116
        macro avg       0.83      0.80      0.78       116
     weighted avg       0.85      0.82      0.82       116

```
### **Confustion matrix**
```
[[ 5  1  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  2  0  1  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 18  0  0  3  0  0  0  0  0  0]
 [ 0  0  0  0  0  9  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  0  0  0]
 [ 0  2  0  0  1  0  0 20  0  0  1  0  0  0]
 [ 0  1  0  0  0  0  0  0 11  0  0  1  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0  1]
 [ 0  0  0  1  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       0.78      0.88      0.82         8
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.50      0.50      0.50         4
             Drug       0.78      0.93      0.85        15
            Fraud       0.94      0.94      0.94        17
         Gambling       1.00      0.75      0.86         4
           Murder       0.86      0.95      0.90        20
National Security       0.88      0.88      0.88        17
        Non-crime       1.00      0.50      0.67         4
     Sexual Abuse       0.82      0.75      0.78        12
      State Crime       0.50      1.00      0.67         1
 Theft / Burglary       1.00      0.80      0.89         5
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.85       116
        macro avg       0.86      0.79      0.80       116
     weighted avg       0.87      0.85      0.85       116

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  2  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  1  0 16  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 19  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 15  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  1  2  0  0  0  0]
 [ 0  1  0  0  2  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  1]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         9
Battery / Assault       1.00      0.86      0.92         7
          Bribery       1.00      1.00      1.00         1
   Cyber Security       0.50      0.33      0.40         3
             Drug       0.88      0.88      0.88        17
            Fraud       0.86      0.75      0.80        16
         Gambling       1.00      1.00      1.00         3
           Murder       0.83      1.00      0.90        19
National Security       0.93      1.00      0.97        14
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.83      0.83      0.83        12
 Theft / Burglary       0.88      0.78      0.82         9
      Trafficking       0.83      1.00      0.91         5

         accuracy                           0.88       116
        macro avg       0.81      0.80      0.80       116
     weighted avg       0.87      0.88      0.87       116

```
### **Confustion matrix**
```
[[ 9  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  1  0  0  0  0]
 [ 0  0  0  0 15  1  0  0  0  0  1  0  0]
 [ 0  0  0  1  2 12  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 19  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 14  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0 10  0  1]
 [ 0  0  0  0  0  0  0  1  0  0  1  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      1.00      0.92         6
Battery / Assault       1.00      0.50      0.67        10
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.20      0.33         5
             Drug       0.81      0.94      0.87        18
            Fraud       0.67      0.80      0.73        15
         Gambling       1.00      1.00      1.00         5
           Murder       0.86      0.95      0.90        20
National Security       1.00      1.00      1.00        17
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.78      1.00      0.88         7
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       0.80      0.80      0.80         5
      Trafficking       1.00      0.67      0.80         3

         accuracy                           0.85       116
        macro avg       0.91      0.81      0.83       116
     weighted avg       0.87      0.85      0.84       116

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  3  0  0  2  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  4  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  2 12  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 19  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 17  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  4  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.50      0.50      0.50         2
Battery / Assault       0.86      0.67      0.75         9
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.50      0.67         4
             Drug       0.83      0.83      0.83        18
            Fraud       0.93      0.87      0.90        15
         Gambling       1.00      0.86      0.92         7
           Murder       0.65      0.93      0.76        14
National Security       0.92      0.80      0.86        15
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.79      0.79      0.79        14
      State Crime       0.40      1.00      0.57         2
 Theft / Burglary       1.00      0.91      0.95        11
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.83       116
        macro avg       0.85      0.83      0.82       116
     weighted avg       0.86      0.83      0.83       116

```
### **Confustion matrix**
```
[[ 1  0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  6  0  0  0  0  0  2  0  0  1  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  2  0  0  1  0  0  0]
 [ 0  0  0  0  2 13  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  6  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0 13  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 12  0  0  3  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  1  0  0  0  0  0  2  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.88      0.93         8
Battery / Assault       1.00      0.43      0.60         7
          Bribery       1.00      0.25      0.40         4
   Cyber Security       0.83      0.71      0.77         7
             Drug       1.00      0.89      0.94        19
            Fraud       0.78      0.93      0.85        15
         Gambling       0.86      1.00      0.92         6
           Murder       0.87      1.00      0.93        27
National Security       0.91      1.00      0.95        10
     Sexual Abuse       0.80      0.80      0.80         5
 Theft / Burglary       0.86      1.00      0.92         6
      Trafficking       0.67      1.00      0.80         2

         accuracy                           0.88       116
        macro avg       0.88      0.82      0.82       116
     weighted avg       0.89      0.88      0.87       116

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  3  0  0  0  0  0  3  0  1  0  0]
 [ 0  0  1  0  0  3  0  0  0  0  0  0]
 [ 0  0  0  5  0  1  0  0  1  0  0  0]
 [ 0  0  0  0 17  0  0  0  0  0  1  1]
 [ 0  0  0  1  0 14  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 27  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  4  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.50      1.00      0.67         1
Battery / Assault       1.00      0.70      0.82        10
          Bribery       0.50      0.33      0.40         3
   Cyber Security       1.00      0.33      0.50         3
             Drug       0.90      0.90      0.90        21
            Fraud       0.75      0.90      0.82        10
         Gambling       1.00      0.75      0.86         4
           Murder       0.85      1.00      0.92        23
National Security       0.82      1.00      0.90        14
        Non-crime       1.00      1.00      1.00         2
     Sexual Abuse       0.86      0.92      0.89        13
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       0.83      0.62      0.71         8
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.85       116
        macro avg       0.79      0.75      0.74       116
     weighted avg       0.85      0.85      0.84       116

```
### **Confustion matrix**
```
[[ 1  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  1  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 19  0  0  1  0  0  1  0  0  0]
 [ 0  0  0  0  0  9  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 23  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 14  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  1  0  1  1  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      1.00      0.91         5
Battery / Assault       1.00      0.50      0.67         4
          Bribery       1.00      1.00      1.00         5
   Cyber Security       0.00      0.00      0.00         1
             Drug       1.00      0.95      0.97        19
            Fraud       0.88      1.00      0.94        15
         Gambling       1.00      1.00      1.00         6
           Murder       0.77      0.89      0.83        19
National Security       0.77      1.00      0.87        17
     Sexual Abuse       0.90      0.69      0.78        13
      State Crime       1.00      0.14      0.25         7
 Theft / Burglary       0.80      1.00      0.89         4
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.86       116
        macro avg       0.84      0.78      0.78       116
     weighted avg       0.88      0.86      0.84       116

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  1  0  0  0  1  0]
 [ 0  0  5  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 18  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0 15  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0 17  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 17  0  0  0  0]
 [ 0  0  0  1  0  1  0  2  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  1  5  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.60      1.00      0.75         3
Battery / Assault       1.00      0.50      0.67        10
          Bribery       0.75      1.00      0.86         3
   Cyber Security       0.50      0.50      0.50         2
             Drug       1.00      0.82      0.90        11
            Fraud       0.80      0.92      0.86        13
         Gambling       1.00      1.00      1.00         9
           Murder       0.82      0.92      0.87        25
National Security       0.92      0.92      0.92        13
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.82      1.00      0.90         9
      State Crime       1.00      1.00      1.00         2
 Theft / Burglary       1.00      0.86      0.92         7
      Trafficking       1.00      0.86      0.92         7

         accuracy                           0.87       115
        macro avg       0.80      0.81      0.79       115
     weighted avg       0.88      0.87      0.86       115

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  4  1  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 1  0  0  0  9  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0 12  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 1  0  1  0  0  0  0 23  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 12  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  6]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.89      0.89      0.89         9
Battery / Assault       0.40      0.40      0.40         5
          Bribery       1.00      0.75      0.86         4
   Cyber Security       0.60      1.00      0.75         3
             Drug       0.83      0.94      0.88        16
            Fraud       0.90      0.75      0.82        12
         Gambling       0.75      1.00      0.86         3
           Murder       0.81      0.88      0.85        25
National Security       0.87      1.00      0.93        13
     Sexual Abuse       1.00      0.67      0.80         6
      State Crime       1.00      0.33      0.50         3
 Theft / Burglary       0.90      0.90      0.90        10
      Trafficking       1.00      0.67      0.80         6

         accuracy                           0.83       115
        macro avg       0.84      0.78      0.79       115
     weighted avg       0.85      0.83      0.83       115

```
### **Confustion matrix**
```
[[ 8  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  3  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  0  0  0  0  1  0]
 [ 0  0  0  2  0  9  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  0 22  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 13  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  4  0  0  0]
 [ 0  1  0  0  0  0  0  0  1  0  1  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  2  0  0  0  0  0  0  0  4]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.82      0.90      0.84      5.40
Battery / Assault:        0.85      0.62      0.69      7.50
Bribery:                  0.93      0.75      0.80      3.10
Cyber Security:           0.66      0.51      0.52      3.40
Drug:                     0.89      0.90      0.89     17.50
Fraud:                    0.85      0.88      0.86     13.80
Gambling:                 0.96      0.94      0.94      4.80
Murder:                   0.80      0.94      0.86     21.60
National Security:        0.89      0.95      0.91     14.30
Sexual Abuse:             0.85      0.84      0.84     10.40
State Crime:              0.56      0.51      0.47      2.10
Theft / Burglary:         0.91      0.84      0.87      7.40
Trafficking:              0.90      0.87      0.86      3.10
Non-crime:                0.50      0.33      0.38      1.40

Accuracy                                      0.85    115.80
Weighted avg:             0.84      0.80      0.80    115.80
Macro avg:                0.87      0.85      0.85    115.80
```
