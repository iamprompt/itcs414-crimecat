# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      0.80      0.80         5
Battery / Assault       1.00      0.50      0.67         6
          Bribery       1.00      1.00      1.00         1
   Cyber Security       0.00      0.00      0.00         3
             Drug       1.00      0.65      0.79        17
            Fraud       0.65      0.85      0.73        13
         Gambling       0.86      1.00      0.92         6
           Murder       0.74      1.00      0.85        17
National Security       1.00      1.00      1.00         4
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.93      1.00      0.96        13
 Theft / Burglary       1.00      1.00      1.00         7
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.83        94
        macro avg       0.77      0.75      0.75        94
     weighted avg       0.83      0.83      0.81        94

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 1  0  0  0 11  3  1  1  0  0  0  0  0]
 [ 0  0  0  1  0 11  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 17  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 13  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      1.00      0.86         3
Battery / Assault       1.00      0.12      0.22         8
          Bribery       1.00      0.50      0.67         6
   Cyber Security       0.67      0.67      0.67         3
             Drug       0.59      0.77      0.67        13
            Fraud       0.92      0.79      0.85        14
         Gambling       1.00      0.80      0.89         5
           Murder       0.60      0.83      0.70        18
National Security       0.57      1.00      0.73         4
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.67      0.75      0.71         8
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.86      0.86      0.86         7
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.71        93
        macro avg       0.69      0.61      0.60        93
     weighted avg       0.75      0.71      0.69        93

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  6  0  0  1  0  0  0]
 [ 0  0  3  0  1  0  0  1  1  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 10  1  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  1 11  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  1  0  4  0  0  0  0  0  0  0]
 [ 1  0  0  0  1  0  0 15  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  1  1  0  0  0  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  0]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      0.86      0.86         7
Battery / Assault       1.00      0.50      0.67         8
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.92      1.00      0.96        11
            Fraud       0.95      0.95      0.95        19
         Gambling       1.00      1.00      1.00         2
           Murder       0.81      1.00      0.89        17
National Security       0.60      0.75      0.67         4
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.91      0.91      0.91        11
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.86      0.92         7
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.88        93
        macro avg       0.79      0.77      0.77        93
     weighted avg       0.88      0.88      0.87        93

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  3  1  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 11  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0 18  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 17  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.86      0.92         7
Battery / Assault       1.00      0.50      0.67         2
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.33      0.50      0.40         2
             Drug       0.93      0.68      0.79        19
            Fraud       0.67      0.91      0.77        11
         Gambling       1.00      1.00      1.00         5
           Murder       0.82      1.00      0.90        18
National Security       1.00      0.83      0.91         6
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.70      0.88      0.78         8
      State Crime       0.00      0.00      0.00         0
 Theft / Burglary       0.83      0.62      0.71         8
      Trafficking       0.75      1.00      0.86         3

         accuracy                           0.81        93
        macro avg       0.72      0.66      0.67        93
     weighted avg       0.83      0.81      0.80        93

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  1 13  0  0  1  0  0  2  0  1  1]
 [ 0  0  0  1  0 10  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 18  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  2  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.71      0.83         7
Battery / Assault       0.60      0.38      0.46         8
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.50      1.00      0.67         1
             Drug       0.80      0.86      0.83        14
            Fraud       0.89      0.94      0.91        17
         Gambling       1.00      0.67      0.80         3
           Murder       0.79      1.00      0.88        19
National Security       0.83      0.83      0.83         6
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.71      0.83      0.77         6
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.75      0.75      0.75         4
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.82        93
        macro avg       0.78      0.74      0.74        93
     weighted avg       0.82      0.82      0.81        93

```
### **Confustion matrix**
```
[[ 5  1  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  4  0  0  1  0  0  0]
 [ 0  0  2  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 12  1  0  0  0  0  1  0  0  0]
 [ 0  0  0  1  0 16  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 19  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.75      0.86         4
Battery / Assault       0.80      0.67      0.73         6
          Bribery       0.00      0.00      0.00         1
   Cyber Security       0.67      1.00      0.80         2
             Drug       0.85      0.85      0.85        20
            Fraud       0.83      0.83      0.83        12
         Gambling       0.86      1.00      0.92         6
           Murder       0.70      1.00      0.82        14
National Security       0.86      1.00      0.92         6
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.89      0.73      0.80        11
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       1.00      1.00      1.00         6
      Trafficking       0.00      0.00      0.00         2

         accuracy                           0.83        93
        macro avg       0.68      0.70      0.68        93
     weighted avg       0.80      0.83      0.80        93

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  4  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  0  0  3  0  0  0  0  0  0]
 [ 0  0  0  1  1 10  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 14  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  6  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  1  0  0  0  1  1  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  1  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  2  0  0  0  0  0  0  0  0  0]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      0.67      0.73         6
Battery / Assault       0.40      0.29      0.33         7
          Bribery       1.00      0.80      0.89         5
   Cyber Security       0.67      1.00      0.80         2
             Drug       1.00      1.00      1.00        16
            Fraud       0.88      0.88      0.88         8
         Gambling       1.00      1.00      1.00         1
           Murder       0.74      0.88      0.81        26
National Security       1.00      0.67      0.80         3
     Sexual Abuse       0.83      0.91      0.87        11
      State Crime       1.00      0.50      0.67         2
 Theft / Burglary       1.00      1.00      1.00         4
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.83        93
        macro avg       0.87      0.78      0.80        93
     weighted avg       0.83      0.83      0.82        93

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  4  0  1  0  0  0]
 [ 0  0  4  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0 23  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  1  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0 10  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  4  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      1.00      0.80         2
Battery / Assault       0.60      0.75      0.67         4
          Bribery       1.00      0.75      0.86         4
   Cyber Security       0.67      0.50      0.57         4
             Drug       0.84      1.00      0.91        16
            Fraud       0.77      0.91      0.83        11
         Gambling       1.00      1.00      1.00         3
           Murder       0.95      0.90      0.92        20
National Security       0.83      0.83      0.83         6
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       1.00      0.87      0.93        15
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       1.00      1.00      1.00         3
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.86        93
        macro avg       0.77      0.79      0.76        93
     weighted avg       0.86      0.86      0.85        93

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  3  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1 10  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 1  0  0  0  1  0  0 18  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0 13  0  0  1]
 [ 0  1  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.80      0.73         5
Battery / Assault       0.75      0.33      0.46         9
   Cyber Security       0.50      0.25      0.33         4
             Drug       0.93      0.93      0.93        15
            Fraud       0.67      0.86      0.75         7
         Gambling       1.00      1.00      1.00         7
           Murder       0.76      0.96      0.85        23
National Security       0.80      0.80      0.80         5
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       1.00      1.00      1.00        10
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.75      0.86         4
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.83        93
        macro avg       0.78      0.74      0.75        93
     weighted avg       0.82      0.83      0.81        93

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 2  3  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  1  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0 14  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  6  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0 22  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       0.60      0.27      0.37        11
          Bribery       1.00      0.50      0.67         2
   Cyber Security       1.00      0.60      0.75         5
             Drug       0.82      0.88      0.85        16
            Fraud       0.91      0.83      0.87        12
         Gambling       0.90      0.90      0.90        10
           Murder       0.65      1.00      0.79        11
National Security       0.75      1.00      0.86         3
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.60      0.86      0.71         7
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.90      1.00      0.95         9
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.78        93
        macro avg       0.65      0.63      0.62        93
     weighted avg       0.78      0.78      0.76        93

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  1  0  0  5  0  0  2  0  0  0]
 [ 0  0  1  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  1  0  1  0]
 [ 0  0  0  0  1 10  1  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 11  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  0  0  0  1  0  0  6  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  0]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.85      0.84      0.84      5.00
Battery / Assault:        0.78      0.43      0.52      6.90
Bribery:                  0.80      0.57      0.65      2.60
Cyber Security:           0.50      0.55      0.50      2.70
Drug:                     0.87      0.86      0.86     15.70
Fraud:                    0.81      0.87      0.84     12.40
Gambling:                 0.96      0.94      0.94      4.80
Murder:                   0.76      0.96      0.84     18.30
National Security:        0.82      0.87      0.83      4.70
Sexual Abuse:             0.82      0.87      0.84     10.00
State Crime:              0.10      0.05      0.07      1.10
Theft / Burglary:         0.93      0.88      0.90      5.90
Trafficking:              0.62      0.65      0.62      1.60
Non-crime:                0.60      0.47      0.51      1.40

Accuracy                                      0.82     93.10
Weighted avg:             0.75      0.72      0.71     93.10
Macro avg:                0.82      0.82      0.80     93.10
```
