# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         3
Battery / Assault       1.00      0.60      0.75         5
          Bribery       1.00      1.00      1.00         1
             Drug       1.00      0.84      0.91        19
            Fraud       1.00      1.00      1.00         7
         Gambling       1.00      1.00      1.00         7
           Murder       0.67      1.00      0.80        10
     Sexual Abuse       1.00      1.00      1.00         7
 Theft / Burglary       0.75      1.00      0.86         3
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.91        64
        macro avg       0.94      0.91      0.91        64
     weighted avg       0.94      0.91      0.91        64

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  1  0  0  0]
 [ 0  3  0  0  0  0  2  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0 16  0  0  2  0  1  0]
 [ 0  0  0  0  7  0  0  0  0  0]
 [ 0  0  0  0  0  7  0  0  0  0]
 [ 0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  7  0  0]
 [ 0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  2]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      0.67      0.73         6
Battery / Assault       0.50      0.25      0.33         4
          Bribery       1.00      0.75      0.86         4
             Drug       0.94      0.89      0.91        18
            Fraud       0.75      1.00      0.86         3
         Gambling       1.00      1.00      1.00         4
           Murder       0.67      1.00      0.80         6
National Security       1.00      1.00      1.00         1
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.87      0.87      0.87        15
 Theft / Burglary       1.00      1.00      1.00         2
      Trafficking       0.00      0.00      0.00         0

         accuracy                           0.84        64
        macro avg       0.79      0.79      0.78        64
     weighted avg       0.86      0.84      0.84        64

```
### **Confustion matrix**
```
[[ 4  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  3  0  1  0  0  0  0  0  0  0]
 [ 1  0  0 16  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  1  0  0 13  0  1]
 [ 0  0  0  0  0  0  0  0  0  0  2  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      0.33      0.50         3
             Drug       0.88      1.00      0.94        15
            Fraud       0.70      1.00      0.82         7
         Gambling       1.00      1.00      1.00         2
           Murder       1.00      1.00      1.00        13
National Security       0.67      1.00      0.80         2
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.75      1.00      0.86         6
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.83      0.91         6
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.88        64
        macro avg       0.64      0.64      0.62        64
     weighted avg       0.84      0.88      0.84        64

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  7  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 13  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  0]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.67      0.67         3
Battery / Assault       1.00      0.50      0.67         2
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.50      0.50      0.50         2
             Drug       0.79      0.88      0.83        17
            Fraud       1.00      0.83      0.91        12
         Gambling       0.67      1.00      0.80         4
           Murder       0.60      0.86      0.71         7
National Security       1.00      1.00      1.00         1
     Sexual Abuse       0.80      0.67      0.73         6
 Theft / Burglary       1.00      0.80      0.89         5
      Trafficking       1.00      0.33      0.50         3

         accuracy                           0.80        64
        macro avg       0.84      0.75      0.77        64
     weighted avg       0.83      0.80      0.79        64

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  2  0  0  0  0]
 [ 0  0  0  1  1 10  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  6  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0]
 [ 1  0  0  0  0  0  1  0  0  4  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  4  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  1]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.50      0.60         6
Battery / Assault       0.00      0.00      0.00         3
          Bribery       0.67      1.00      0.80         2
   Cyber Security       0.00      0.00      0.00         2
             Drug       1.00      0.95      0.97        19
            Fraud       0.43      1.00      0.60         3
         Gambling       1.00      1.00      1.00         1
           Murder       0.71      1.00      0.83        12
National Security       0.00      0.00      0.00         1
     Sexual Abuse       0.75      1.00      0.86         6
 Theft / Burglary       1.00      0.57      0.73         7
      Trafficking       0.50      0.50      0.50         2

         accuracy                           0.78        64
        macro avg       0.57      0.63      0.57        64
     weighted avg       0.75      0.78      0.74        64

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  2  0  0  0  1]
 [ 0  0  0  0  0  0  0  2  0  1  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0 18  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 12  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  6  0  0]
 [ 1  0  1  0  0  1  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  1]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         5
          Bribery       1.00      0.50      0.67         2
             Drug       0.80      0.92      0.86        13
            Fraud       0.78      0.88      0.82         8
         Gambling       1.00      0.80      0.89         5
           Murder       0.69      0.90      0.78        10
National Security       1.00      1.00      1.00         1
        Non-crime       1.00      0.25      0.40         4
     Sexual Abuse       0.82      0.82      0.82        11
 Theft / Burglary       0.33      0.33      0.33         3
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.80        64
        macro avg       0.86      0.72      0.75        64
     weighted avg       0.82      0.80      0.79        64

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  1  0  0  0  0  0  0  0]
 [ 0  0 12  0  0  0  0  0  0  1  0]
 [ 0  0  0  7  0  0  0  0  1  0  0]
 [ 0  0  0  0  4  0  0  0  0  1  0]
 [ 0  0  0  0  0  9  0  0  1  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  1  0  0  2  0  1  0  0  0]
 [ 0  0  0  0  0  2  0  0  9  0  0]
 [ 0  0  1  1  0  0  0  0  0  1  0]
 [ 0  0  1  0  0  0  0  0  0  0  1]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.83      0.91         6
Battery / Assault       1.00      0.33      0.50         3
          Bribery       1.00      0.33      0.50         3
             Drug       0.78      0.88      0.82         8
            Fraud       0.88      0.54      0.67        13
         Gambling       0.90      1.00      0.95         9
           Murder       0.67      1.00      0.80        10
National Security       0.50      1.00      0.67         1
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.71      1.00      0.83         5
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.75      1.00      0.86         3

         accuracy                           0.79        63
        macro avg       0.77      0.74      0.71        63
     weighted avg       0.82      0.79      0.77        63

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  1  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  1  0  1  0  1  0  0  0  0  0]
 [ 0  0  0  7  0  0  1  0  0  0  0  0]
 [ 0  0  0  2  7  1  1  0  0  1  0  1]
 [ 0  0  0  0  0  9  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 10  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  5  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         2
Battery / Assault       1.00      0.50      0.67         2
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.00      0.00      0.00         0
             Drug       0.85      0.89      0.87        19
            Fraud       0.90      0.82      0.86        11
         Gambling       1.00      1.00      1.00         1
           Murder       1.00      0.92      0.96        13
National Security       1.00      1.00      1.00         2
     Sexual Abuse       0.80      1.00      0.89         4
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      1.00      1.00         3
      Trafficking       0.75      1.00      0.86         3

         accuracy                           0.89        63
        macro avg       0.79      0.78      0.78        63
     weighted avg       0.90      0.89      0.89        63

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  1  0  0  0  0  0  0  1]
 [ 0  0  0  1  1  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 12  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  4  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       1.00      0.33      0.50         3
          Bribery       1.00      0.75      0.86         4
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.82      1.00      0.90        14
            Fraud       0.70      0.88      0.78         8
         Gambling       1.00      0.75      0.86         4
           Murder       0.89      0.89      0.89         9
     Sexual Abuse       0.91      0.91      0.91        11
 Theft / Burglary       1.00      1.00      1.00         4

         accuracy                           0.87        63
        macro avg       0.93      0.80      0.84        63
     weighted avg       0.89      0.87      0.87        63

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  1  0]
 [ 0  0  3  0  0  1  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0]
 [ 0  0  0  0  1  7  0  0  0  0]
 [ 0  0  0  0  1  0  3  0  0  0]
 [ 0  0  0  0  1  0  0  8  0  0]
 [ 0  0  0  0  0  1  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  4]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         2
Battery / Assault       1.00      0.67      0.80         3
          Bribery       1.00      0.50      0.67         2
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.71      0.91      0.80        11
            Fraud       0.50      0.67      0.57         6
         Gambling       0.88      0.88      0.88         8
           Murder       0.91      1.00      0.95        10
National Security       1.00      0.50      0.67         2
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.83      0.83      0.83        12
 Theft / Burglary       1.00      0.50      0.67         2

         accuracy                           0.81        63
        macro avg       0.90      0.72      0.77        63
     weighted avg       0.84      0.81      0.81        63

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  0  0  0  1  0]
 [ 0  0  1  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  0 10  0  0  1  0  0  0  0]
 [ 0  0  0  0  1  4  0  0  0  0  1  0]
 [ 0  0  0  0  1  0  7  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 10  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  1  1  0  0  0  0 10  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  1]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.92      0.81      0.86      4.20
Battery / Assault:        0.65      0.32      0.42      2.60
Bribery:                  0.97      0.78      0.83      2.30
Cyber Security:           0.35      0.18      0.23      1.10
Drug:                     0.86      0.92      0.88     15.30
Fraud:                    0.76      0.86      0.79      7.80
Gambling:                 0.94      0.94      0.94      4.50
Murder:                   0.78      0.96      0.85     10.00
National Security:        0.62      0.65      0.61      1.10
Sexual Abuse:             0.82      0.91      0.86      8.30
State Crime:              0.00      0.00      0.00      0.30
Theft / Burglary:         0.88      0.80      0.82      3.80
Trafficking:              0.42      0.33      0.35      1.30
Non-crime:                0.40      0.29      0.32      1.00

Accuracy                                      0.84     63.60
Weighted avg:             0.80      0.75      0.75     63.60
Macro avg:                0.85      0.84      0.83     63.60
```
