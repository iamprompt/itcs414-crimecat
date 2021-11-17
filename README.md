# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       1.00      0.80      0.89         5
          Bribery       1.00      1.00      1.00         5
   Cyber Security       0.50      0.33      0.40         3
             Drug       0.83      0.83      0.83        18
            Fraud       0.86      0.95      0.90        20
         Gambling       1.00      0.86      0.92         7
           Murder       0.81      0.96      0.88        26
National Security       0.89      0.84      0.86        19
        Non-crime       1.00      0.50      0.67         4
     Sexual Abuse       0.93      0.93      0.93        14
      State Crime       0.80      0.67      0.73         6
 Theft / Burglary       1.00      1.00      1.00        12
      Trafficking       1.00      1.00      1.00         4

         accuracy                           0.88       147
        macro avg       0.90      0.83      0.86       147
     weighted avg       0.89      0.88      0.88       147

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  5  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  3  0  0  0  0  0  0]
 [ 0  0  0  0  1 19  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 25  0  0  1  0  0  0]
 [ 0  0  0  1  1  0  0  0 16  0  0  1  0  0]
 [ 0  0  0  0  1  0  0  1  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  4  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0 12  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.67      0.67         3
Battery / Assault       1.00      0.77      0.87        13
          Bribery       0.80      0.67      0.73         6
   Cyber Security       0.50      0.33      0.40         3
             Drug       0.90      0.90      0.90        20
            Fraud       0.92      0.81      0.86        27
         Gambling       1.00      1.00      1.00         7
           Murder       0.79      0.96      0.86        23
National Security       0.81      0.81      0.81        21
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.62      0.83      0.71         6
      State Crime       0.25      0.33      0.29         3
 Theft / Burglary       0.88      1.00      0.93         7
      Trafficking       0.83      1.00      0.91         5

         accuracy                           0.83       147
        macro avg       0.78      0.74      0.75       147
     weighted avg       0.84      0.83      0.83       147

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 1 10  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  4  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  0  1  0  0  0]
 [ 0  0  0  0 18  0  0  1  0  0  0  0  0  1]
 [ 0  0  1  1  0 22  0  1  0  0  1  0  1  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 22  0  0  1  0  0  0]
 [ 0  0  0  0  0  1  0  0 17  0  0  3  0  0]
 [ 0  0  0  0  1  0  0  0  1  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         9
Battery / Assault       0.43      0.60      0.50         5
          Bribery       0.67      0.50      0.57         4
   Cyber Security       1.00      0.50      0.67         6
             Drug       0.83      0.90      0.86        21
            Fraud       0.69      0.95      0.80        19
         Gambling       1.00      0.83      0.91         6
           Murder       0.86      0.92      0.89        26
National Security       0.87      0.93      0.90        14
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.90      0.82      0.86        11
      State Crime       1.00      0.50      0.67         4
 Theft / Burglary       0.92      0.92      0.92        12
      Trafficking       1.00      0.83      0.91         6

         accuracy                           0.83       146
        macro avg       0.87      0.73      0.77       146
     weighted avg       0.85      0.83      0.83       146

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  2  0  0  1  0  0  0]
 [ 0  3  0  0  1  0  0  1  0  0  0  0  0  0]
 [ 0  1  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 19  1  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  1 18  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  0 24  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0 13  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  1  0  1  0  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0 11  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  5]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.83      0.91         6
Battery / Assault       0.82      0.56      0.67        16
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.33      0.33      0.33         3
             Drug       0.93      1.00      0.96        13
            Fraud       0.85      0.92      0.88        25
         Gambling       0.75      0.75      0.75         4
           Murder       0.81      0.93      0.87        28
National Security       0.79      0.94      0.86        16
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.82      1.00      0.90        14
      State Crime       0.67      0.40      0.50         5
 Theft / Burglary       0.60      0.50      0.55         6
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.82       146
        macro avg       0.81      0.70      0.73       146
     weighted avg       0.82      0.82      0.81       146

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  5  0  0  1  1  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 13  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0 23  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  1  0]
 [ 0  1  0  0  0  0  0 26  0  0  0  0  1  0]
 [ 0  1  0  0  0  0  0  0 15  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 14  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  2  0  0]
 [ 0  0  0  0  1  2  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  4]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       0.78      0.70      0.74        10
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.50      0.75      0.60         4
             Drug       0.88      1.00      0.94        15
            Fraud       0.95      0.90      0.92        20
         Gambling       1.00      1.00      1.00         6
           Murder       0.89      1.00      0.94        33
National Security       0.77      0.89      0.83        19
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       1.00      0.80      0.89        15
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       1.00      0.89      0.94         9
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.88       146
        macro avg       0.84      0.81      0.82       146
     weighted avg       0.88      0.88      0.88       146

```
### **Confustion matrix**
```
[[ 4  1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  2  1  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  2 18  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 33  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0 17  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  1  0  1  0  0  0  1  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      1.00      0.91        10
Battery / Assault       0.90      0.75      0.82        12
          Bribery       1.00      0.40      0.57         5
   Cyber Security       1.00      0.50      0.67         4
             Drug       0.89      0.84      0.86        19
            Fraud       0.71      0.89      0.79        19
         Gambling       0.78      0.70      0.74        10
           Murder       0.88      1.00      0.93        21
National Security       0.90      0.95      0.92        19
     Sexual Abuse       0.70      0.88      0.78         8
      State Crime       0.80      0.67      0.73         6
 Theft / Burglary       1.00      0.80      0.89         5
      Trafficking       1.00      0.75      0.86         8

         accuracy                           0.84       146
        macro avg       0.88      0.78      0.81       146
     weighted avg       0.86      0.84      0.84       146

```
### **Confustion matrix**
```
[[10  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  1  0  2  0  0  0]
 [ 0  0  2  0  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  0  0  0  0  0]
 [ 0  1  0  0 16  0  1  0  0  1  0  0  0]
 [ 0  0  0  0  1 17  1  0  0  0  0  0  0]
 [ 0  0  0  0  1  2  7  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 21  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  4  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  4  0]
 [ 2  0  0  0  0  0  0  0  0  0  0  0  6]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.78      1.00      0.88         7
Battery / Assault       0.57      0.50      0.53         8
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.67      0.80         3
             Drug       1.00      0.90      0.95        20
            Fraud       0.92      1.00      0.96        12
         Gambling       1.00      1.00      1.00        11
           Murder       0.85      0.97      0.90        29
National Security       0.91      1.00      0.95        20
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      0.92      0.96        12
      State Crime       1.00      0.25      0.40         4
 Theft / Burglary       1.00      0.93      0.97        15
      Trafficking       0.67      1.00      0.80         2

         accuracy                           0.90       146
        macro avg       0.84      0.80      0.79       146
     weighted avg       0.91      0.90      0.89       146

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 1  0  0  0 18  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0 12  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 11  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 28  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 20  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]
 [ 0  1  0  0  0  0  0  0  0  0 11  0  0  0]
 [ 0  1  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0 14  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       0.82      0.82      0.82        11
          Bribery       0.75      0.43      0.55         7
   Cyber Security       0.00      0.00      0.00         3
             Drug       0.79      0.83      0.81        18
            Fraud       0.78      0.82      0.80        17
         Gambling       1.00      1.00      1.00         8
           Murder       0.90      0.96      0.93        27
National Security       0.82      0.90      0.86        20
     Sexual Abuse       1.00      0.78      0.88         9
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       0.88      1.00      0.93        14
      Trafficking       0.83      0.83      0.83         6

         accuracy                           0.84       146
        macro avg       0.74      0.72      0.72       146
     weighted avg       0.83      0.84      0.83       146

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  3  0  1  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  2  0  0  0  0]
 [ 0  1  0  0 15  0  0  1  0  0  0  1  0]
 [ 0  0  0  0  2 14  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0 26  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  2  0  0]
 [ 0  1  0  0  0  0  0  0  0  7  0  0  1]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0 14  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  5]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.71      0.83      0.77         6
Battery / Assault       0.83      0.77      0.80        13
          Bribery       0.50      1.00      0.67         2
   Cyber Security       0.33      0.25      0.29         4
             Drug       0.94      0.94      0.94        16
            Fraud       0.94      0.76      0.84        21
         Gambling       1.00      1.00      1.00        12
           Murder       0.80      0.91      0.85        22
National Security       0.84      0.95      0.89        22
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.88      0.70      0.78        10
      State Crime       0.83      0.83      0.83         6
 Theft / Burglary       1.00      1.00      1.00         8
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.86       146
        macro avg       0.83      0.82      0.81       146
     weighted avg       0.86      0.86      0.85       146

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0 10  0  0  1  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  2  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  0  0  0  1  0  0  0]
 [ 0  0  2  2  0 16  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 12  0  0  0  0  0  0  0]
 [ 1  1  0  0  0  0  0 20  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 21  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  1  1  0  0  0  0]
 [ 1  1  0  0  0  0  0  1  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  5  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      0.83      0.83         6
Battery / Assault       1.00      0.67      0.80        15
          Bribery       1.00      0.33      0.50         3
   Cyber Security       0.25      0.33      0.29         3
             Drug       0.86      0.78      0.82        23
            Fraud       0.88      0.97      0.92        29
         Gambling       1.00      1.00      1.00         5
           Murder       0.66      0.86      0.75        22
National Security       0.85      0.85      0.85        13
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.83      0.91      0.87        11
      State Crime       0.67      0.40      0.50         5
 Theft / Burglary       0.83      0.71      0.77         7
      Trafficking       0.67      0.67      0.67         3

         accuracy                           0.81       146
        macro avg       0.81      0.74      0.75       146
     weighted avg       0.83      0.81      0.81       146

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0 10  0  0  0  0  0  4  0  0  0  0  1  0]
 [ 0  0  1  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  1 18  1  0  1  0  0  1  0  0  1]
 [ 0  0  0  1  0 28  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 1  0  0  0  2  0  0 19  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 11  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  1  2  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  2]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.88      0.86      0.87      6.00
Battery / Assault:        0.81      0.69      0.74     10.80
Bribery:                  0.87      0.65      0.70      3.90
Cyber Security:           0.54      0.40      0.44      3.60
Drug:                     0.88      0.89      0.89     18.30
Fraud:                    0.85      0.90      0.87     20.90
Gambling:                 0.95      0.91      0.93      7.60
Murder:                   0.82      0.95      0.88     25.70
National Security:        0.84      0.91      0.87     18.30
Sexual Abuse:             0.87      0.86      0.85     11.00
State Crime:              0.60      0.41      0.46      4.40
Theft / Burglary:         0.91      0.88      0.89      9.50
Trafficking:              0.90      0.89      0.89      4.40
Non-crime:                0.70      0.40      0.48      1.80

Accuracy                                      0.85    146.20
Weighted avg:             0.83      0.77      0.78    146.20
Macro avg:                0.86      0.85      0.84    146.20
```
