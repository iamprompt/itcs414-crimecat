# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      1.00      0.91         5
Battery / Assault       1.00      0.83      0.91        12
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.00      0.00      0.00         2
             Drug       1.00      0.89      0.94        19
            Fraud       0.78      0.95      0.86        19
         Gambling       1.00      1.00      1.00         3
           Murder       0.88      0.91      0.89        23
National Security       0.94      0.94      0.94        17
        Non-crime       1.00      1.00      1.00         2
     Sexual Abuse       0.71      0.83      0.77        12
      State Crime       1.00      0.50      0.67         2
 Theft / Burglary       1.00      0.86      0.92        14
      Trafficking       1.00      1.00      1.00         4

         accuracy                           0.88       137
        macro avg       0.87      0.81      0.83       137
     weighted avg       0.90      0.88      0.88       137

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0 10  0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  1  0  0  0  0  1  0  0  0]
 [ 0  0  0  1  0 18  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 21  0  0  2  0  0  0]
 [ 0  0  0  1  0  0  0  0 16  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 1  0  0  0  0  0  0  1  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  0 12  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         5
Battery / Assault       1.00      0.67      0.80         6
   Cyber Security       1.00      0.33      0.50         6
             Drug       0.81      0.81      0.81        16
            Fraud       0.88      0.96      0.92        24
         Gambling       1.00      1.00      1.00         7
           Murder       0.82      0.92      0.87        25
National Security       0.78      1.00      0.88        18
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       1.00      1.00      1.00        15
      State Crime       1.00      0.50      0.67         2
 Theft / Burglary       0.88      0.70      0.78        10
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.87       137
        macro avg       0.82      0.76      0.76       137
     weighted avg       0.87      0.87      0.86       137

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  1  0  0  3  0  0  0  0  0]
 [ 0  0  0 13  1  0  1  0  0  0  0  0  1]
 [ 0  0  0  0 23  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0 23  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0 15  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  1  1  0  1  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.75      0.75         8
Battery / Assault       0.62      0.62      0.62         8
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.33      0.50      0.40         2
             Drug       0.79      0.92      0.85        12
            Fraud       0.90      0.86      0.88        22
         Gambling       0.83      1.00      0.91         5
           Murder       0.84      0.87      0.86        31
National Security       0.83      0.95      0.88        20
        Non-crime       0.50      1.00      0.67         1
     Sexual Abuse       0.57      0.80      0.67         5
      State Crime       1.00      0.20      0.33         5
 Theft / Burglary       1.00      0.89      0.94         9
      Trafficking       1.00      0.40      0.57         5

         accuracy                           0.81       137
        macro avg       0.78      0.73      0.71       137
     weighted avg       0.83      0.81      0.80       137

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  5  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  2  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 11  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  1 19  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 1  3  0  0  0  0  0 27  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 19  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  4  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  8  0]
 [ 1  0  0  0  1  0  0  0  0  0  1  0  0  2]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.60      0.75         5
Battery / Assault       1.00      0.57      0.73        14
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.88      0.93      0.90        15
            Fraud       0.84      0.84      0.84        19
         Gambling       1.00      0.86      0.92         7
           Murder       0.77      1.00      0.87        27
National Security       0.68      1.00      0.81        15
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.93      0.93      0.93        14
      State Crime       1.00      0.17      0.29         6
 Theft / Burglary       0.86      0.86      0.86         7
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.83       137
        macro avg       0.85      0.74      0.76       137
     weighted avg       0.86      0.83      0.82       137

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  8  0  0  0  0  0  5  1  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  2 16  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 27  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 15  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      1.00      0.86         3
Battery / Assault       0.83      0.42      0.56        12
          Bribery       1.00      0.50      0.67         2
   Cyber Security       1.00      0.50      0.67         4
             Drug       0.84      0.91      0.87        23
            Fraud       0.83      0.95      0.89        21
         Gambling       1.00      0.88      0.93         8
           Murder       0.71      0.91      0.80        22
National Security       0.94      0.94      0.94        18
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.67      0.86      0.75         7
      State Crime       0.67      0.67      0.67         3
 Theft / Burglary       0.90      0.82      0.86        11
      Trafficking       0.00      0.00      0.00         2

         accuracy                           0.82       137
        macro avg       0.72      0.67      0.68       137
     weighted avg       0.82      0.82      0.81       137

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  5  0  0  1  0  0  5  0  0  1  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  0  0  0  0  0  0]
 [ 1  0  0  0 21  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  1 20  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 20  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 17  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  9  0]
 [ 0  0  0  0  1  0  0  0  0  0  1  0  0  0]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.86      0.92         7
Battery / Assault       0.75      0.43      0.55         7
          Bribery       1.00      1.00      1.00         5
   Cyber Security       0.50      0.67      0.57         3
             Drug       0.81      0.94      0.87        18
            Fraud       0.88      0.88      0.88        17
         Gambling       1.00      1.00      1.00         6
           Murder       0.81      1.00      0.90        26
National Security       0.90      1.00      0.95        19
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.90      0.82      0.86        11
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       1.00      0.67      0.80         9
      Trafficking       1.00      1.00      1.00         4

         accuracy                           0.87       136
        macro avg       0.75      0.73      0.74       136
     weighted avg       0.85      0.87      0.85       136

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  5  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  1  1 15  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 26  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 19  0  0  0  0  0]
 [ 0  0  0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  1  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  1  1  0  1  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.75      0.86         8
Battery / Assault       0.40      0.50      0.44         4
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.50      0.33      0.40         3
             Drug       0.94      0.80      0.86        20
            Fraud       0.80      1.00      0.89        20
         Gambling       1.00      0.86      0.92         7
           Murder       0.79      0.93      0.85        28
National Security       0.88      0.92      0.90        24
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       1.00      0.78      0.88         9
      State Crime       0.50      0.33      0.40         3
 Theft / Burglary       0.75      1.00      0.86         3
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.84       136
        macro avg       0.83      0.73      0.76       136
     weighted avg       0.85      0.84      0.83       136

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  1  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  1 16  1  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  0 20  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  6  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0 26  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 22  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  1  0  0  0  0]
 [ 0  1  0  0  0  1  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.86      0.92         7
Battery / Assault       0.80      0.67      0.73         6
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.17      0.29         6
             Drug       1.00      0.87      0.93        15
            Fraud       0.84      0.88      0.86        24
         Gambling       1.00      0.89      0.94         9
           Murder       0.73      0.95      0.83        20
National Security       0.69      0.95      0.80        19
        Non-crime       1.00      0.75      0.86         4
     Sexual Abuse       1.00      0.90      0.95        10
      State Crime       0.50      0.17      0.25         6
 Theft / Burglary       0.83      1.00      0.91         5
      Trafficking       0.75      1.00      0.86         3

         accuracy                           0.83       136
        macro avg       0.87      0.79      0.79       136
     weighted avg       0.85      0.83      0.81       136

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  3  0  0  0  0  0]
 [ 0  0  0  0 13  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  0 21  0  2  0  0  0  0  1  0]
 [ 0  0  0  0  0  1  8  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 19  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  9  0  0  1]
 [ 0  1  0  0  0  0  0  0  4  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       1.00      0.75      0.86         8
          Bribery       1.00      0.67      0.80         3
   Cyber Security       1.00      0.50      0.67         4
             Drug       0.93      0.93      0.93        15
            Fraud       0.87      0.95      0.91        21
         Gambling       1.00      1.00      1.00        10
           Murder       0.82      1.00      0.90        23
National Security       0.95      0.95      0.95        19
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      0.92      0.96        12
      State Crime       0.50      0.50      0.50         2
 Theft / Burglary       1.00      1.00      1.00         7
      Trafficking       0.86      1.00      0.92         6

         accuracy                           0.91       136
        macro avg       0.85      0.78      0.81       136
     weighted avg       0.91      0.91      0.91       136

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  1 20  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 10  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 23  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  0  0  0  1  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  6]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.50      0.40      0.44         5
Battery / Assault       0.67      0.67      0.67         6
          Bribery       0.80      0.80      0.80         5
   Cyber Security       0.40      1.00      0.57         2
             Drug       0.91      0.91      0.91        23
            Fraud       1.00      0.75      0.86        20
         Gambling       0.89      1.00      0.94         8
           Murder       0.79      0.92      0.85        24
National Security       1.00      1.00      1.00        13
     Sexual Abuse       0.92      0.86      0.89        14
      State Crime       1.00      1.00      1.00         2
 Theft / Burglary       1.00      0.89      0.94         9
      Trafficking       1.00      1.00      1.00         5

         accuracy                           0.87       136
        macro avg       0.84      0.86      0.84       136
     weighted avg       0.88      0.87      0.87       136

```
### **Confustion matrix**
```
[[ 2  1  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  4  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 21  0  0  1  0  1  0  0  0]
 [ 0  0  0  3  1 15  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  0]
 [ 1  0  1  0  0  0  0 22  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 13  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  2  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.88      0.80      0.83      5.80
Battery / Assault:        0.81      0.61      0.69      8.30
Bribery:                  0.88      0.63      0.72      3.10
Cyber Security:           0.57      0.40      0.41      3.40
Drug:                     0.89      0.89      0.89     17.60
Fraud:                    0.86      0.90      0.88     20.70
Gambling:                 0.97      0.95      0.96      7.00
Murder:                   0.80      0.94      0.86     24.90
National Security:        0.86      0.96      0.91     18.20
Sexual Abuse:             0.87      0.87      0.86     10.90
State Crime:              0.72      0.40      0.48      3.30
Theft / Burglary:         0.92      0.87      0.89      8.40
Trafficking:              0.81      0.84      0.80      3.30
Non-crime:                0.45      0.42      0.42      1.60

Accuracy                                      0.85    136.50
Weighted avg:             0.82      0.76      0.77    136.50
Macro avg:                0.86      0.85      0.84    136.50
```
