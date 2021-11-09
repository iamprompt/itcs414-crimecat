# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      1.00      0.91         5
Battery / Assault       0.80      0.50      0.62         8
          Bribery       1.00      0.50      0.67         2
   Cyber Security       1.00      0.60      0.75         5
             Drug       0.86      0.92      0.89        13
            Fraud       0.88      0.88      0.88        16
         Gambling       1.00      1.00      1.00         4
           Murder       0.88      1.00      0.93        14
National Security       1.00      0.60      0.75         5
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.77      1.00      0.87        10
      State Crime       0.00      0.00      0.00         0
 Theft / Burglary       0.83      0.83      0.83         6
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.86        92
        macro avg       0.85      0.77      0.79        92
     weighted avg       0.88      0.86      0.85        92

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  2  0  0  2  0  0  0]
 [ 0  0  1  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 12  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  1 14  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 14  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  3  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      1.00      0.92         6
Battery / Assault       1.00      0.20      0.33         5
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.75      0.69      0.72        13
            Fraud       0.71      0.83      0.77        12
         Gambling       1.00      1.00      1.00         2
           Murder       0.70      0.89      0.78        18
National Security       0.80      1.00      0.89         8
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.88      0.88      0.88         8
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.88      0.88      0.88         8
      Trafficking       1.00      0.67      0.80         3

         accuracy                           0.79        91
        macro avg       0.75      0.69      0.70        91
     weighted avg       0.78      0.79      0.77        91

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  3  1  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  9  1  0  3  0  0  0  0  0  0]
 [ 0  0  0  0  0 10  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 16  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  8  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  2]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.67      0.67         3
Battery / Assault       1.00      0.40      0.57         5
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.00      0.00      0.00         0
             Drug       0.85      0.85      0.85        20
            Fraud       0.93      0.78      0.85        18
         Gambling       0.86      1.00      0.92         6
           Murder       0.70      1.00      0.82        14
National Security       0.60      1.00      0.75         3
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.73      0.73      0.73        11
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.60      0.75         5
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.78        91
        macro avg       0.60      0.55      0.55        91
     weighted avg       0.81      0.78      0.78        91

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 1  0  0  0 17  0  0  1  0  0  1  0  0  0]
 [ 0  0  0  3  0 14  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 14  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  1  1  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  0]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         5
Battery / Assault       1.00      0.33      0.50         3
          Bribery       1.00      0.33      0.50         3
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.87      0.87      0.87        15
            Fraud       0.72      1.00      0.84        13
         Gambling       1.00      0.67      0.80         6
           Murder       0.80      0.95      0.87        21
National Security       1.00      1.00      1.00         3
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.78      0.78      0.78         9
 Theft / Burglary       1.00      0.89      0.94         9
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.84        91
        macro avg       0.78      0.68      0.70        91
     weighted avg       0.84      0.84      0.82        91

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  1  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0 13  1  0  1  0  0  0  0  0]
 [ 0  0  0  0  0 13  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  1  4  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 20  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  1  0  0  7  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.60      0.67         5
Battery / Assault       1.00      0.30      0.46        10
          Bribery       1.00      1.00      1.00         3
   Cyber Security       1.00      0.67      0.80         3
             Drug       0.62      0.50      0.56        10
            Fraud       0.92      1.00      0.96        12
         Gambling       0.86      0.86      0.86         7
           Murder       0.75      1.00      0.86        21
National Security       0.43      1.00      0.60         3
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.56      0.83      0.67         6
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       0.75      0.75      0.75         4
      Trafficking       0.50      0.50      0.50         2

         accuracy                           0.75        91
        macro avg       0.72      0.68      0.67        91
     weighted avg       0.76      0.75      0.72        91

```
### **Confustion matrix**
```
[[ 3  0  0  0  1  0  0  0  0  0  1  0  0  0]
 [ 0  3  0  0  0  0  0  5  0  0  2  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  5  0  1  2  0  0  1  0  0  1]
 [ 0  0  0  0  0 12  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 21  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  1]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         5
Battery / Assault       0.67      0.40      0.50         5
   Cyber Security       0.60      1.00      0.75         3
             Drug       0.95      0.86      0.90        22
            Fraud       0.86      0.86      0.86        14
         Gambling       1.00      1.00      1.00         2
           Murder       0.76      1.00      0.87        13
National Security       1.00      1.00      1.00         8
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.91      0.77      0.83        13
 Theft / Burglary       1.00      1.00      1.00         5

         accuracy                           0.88        91
        macro avg       0.89      0.90      0.88        91
     weighted avg       0.89      0.88      0.88        91

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  3  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  1 19  1  0  0  0  0  1  0]
 [ 0  0  1  1 12  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0 13  0  0  0  0]
 [ 0  0  0  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0]
 [ 0  1  0  0  1  0  1  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.86      0.80         7
Battery / Assault       0.67      0.57      0.62         7
          Bribery       1.00      0.80      0.89         5
   Cyber Security       0.50      0.50      0.50         2
             Drug       0.93      0.93      0.93        14
            Fraud       0.91      0.91      0.91        11
         Gambling       1.00      1.00      1.00         2
           Murder       0.88      0.88      0.88        24
National Security       0.75      1.00      0.86         3
     Sexual Abuse       0.89      1.00      0.94         8
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.83      1.00      0.91         5
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.86        91
        macro avg       0.78      0.76      0.76        91
     weighted avg       0.85      0.86      0.85        91

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  2  0  1  0  0  0]
 [ 0  0  4  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 13  0  0  0  0  0  0  1  0]
 [ 0  0  0  1  0 10  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 1  2  0  0  0  0  0 21  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.50      0.67         2
Battery / Assault       0.80      0.80      0.80         5
          Bribery       1.00      0.80      0.89         5
   Cyber Security       0.67      0.67      0.67         3
             Drug       0.82      1.00      0.90        14
            Fraud       0.78      0.88      0.82         8
         Gambling       1.00      1.00      1.00         5
           Murder       0.88      0.94      0.91        16
National Security       0.86      0.86      0.86         7
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       1.00      0.89      0.94        18
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      1.00      1.00         4
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.88        91
        macro avg       0.81      0.77      0.77        91
     weighted avg       0.88      0.88      0.87        91

```
### **Confustion matrix**
```
[[ 1  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  4  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  7  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 15  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  6  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0 16  0  0  1]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.62      0.77         8
Battery / Assault       0.50      0.33      0.40         6
   Cyber Security       1.00      0.40      0.57         5
             Drug       0.94      0.94      0.94        17
            Fraud       0.73      0.89      0.80         9
         Gambling       1.00      1.00      1.00         5
           Murder       0.69      0.95      0.80        21
National Security       0.75      0.75      0.75         4
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       1.00      1.00      1.00         8
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.75      0.86         4
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.82        91
        macro avg       0.82      0.74      0.76        91
     weighted avg       0.84      0.82      0.81        91

```
### **Confustion matrix**
```
[[ 5  1  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  2  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0 16  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  8  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0 20  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  3  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       1.00      0.30      0.46        10
          Bribery       1.00      0.33      0.50         3
   Cyber Security       0.50      0.33      0.40         3
             Drug       0.77      0.89      0.83        19
            Fraud       0.82      0.82      0.82        11
         Gambling       0.89      0.89      0.89         9
           Murder       0.69      1.00      0.82         9
National Security       0.67      0.67      0.67         3
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.67      0.89      0.76         9
 Theft / Burglary       0.90      1.00      0.95         9
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.78        91
        macro avg       0.69      0.62      0.62        91
     weighted avg       0.80      0.78      0.76        91

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  2  0  0  3  0  0  2  0  0]
 [ 0  0  1  0  1  1  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  1  0  0  0  0]
 [ 0  0  0  0 17  0  0  0  0  0  1  1  0]
 [ 0  0  0  0  1  9  1  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  8  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  9  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  0  0  0  1  0  0  8  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.89      0.82      0.84      5.00
Battery / Assault:        0.84      0.41      0.53      6.40
Bribery:                  0.80      0.54      0.62      2.60
Cyber Security:           0.53      0.42      0.44      2.70
Drug:                     0.84      0.85      0.84     15.70
Fraud:                    0.83      0.88      0.85     12.40
Gambling:                 0.96      0.94      0.95      4.80
Murder:                   0.77      0.96      0.85     17.10
National Security:        0.79      0.89      0.81      4.70
Sexual Abuse:             0.82      0.88      0.84     10.00
State Crime:              0.00      0.00      0.00      0.80
Theft / Burglary:         0.92      0.87      0.89      5.90
Trafficking:              0.60      0.57      0.56      1.60
Non-crime:                0.60      0.47      0.51      1.40

Accuracy                                      0.82     91.10
Weighted avg:             0.77      0.72      0.72     91.10
Macro avg:                0.83      0.82      0.81     91.10
```
