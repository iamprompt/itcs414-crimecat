# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.60      1.00      0.75         3
Battery / Assault       0.00      0.00      0.00         1
          Bribery       1.00      1.00      1.00         3
   Cyber Security       1.00      1.00      1.00         2
             Drug       0.78      0.93      0.85        15
            Fraud       0.94      1.00      0.97        17
         Gambling       1.00      0.40      0.57         5
           Murder       0.78      0.70      0.74        10
National Security       0.50      1.00      0.67         3
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      0.88      0.93         8
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       1.00      1.00      1.00         5
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.83        77
        macro avg       0.65      0.71      0.65        77
     weighted avg       0.81      0.83      0.80        77

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  0 17  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  2  1  2  0  0  0  0  0  0  0]
 [ 1  0  0  0  2  0  0  7  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      0.89      0.84         9
Battery / Assault       1.00      1.00      1.00         1
          Bribery       1.00      0.75      0.86         4
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.92      0.92      0.92        12
            Fraud       0.86      0.92      0.89        13
         Gambling       1.00      1.00      1.00         7
           Murder       0.92      0.92      0.92        12
National Security       0.83      1.00      0.91         5
     Sexual Abuse       0.88      1.00      0.93         7
 Theft / Burglary       1.00      0.75      0.86         4
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.90        77
        macro avg       0.85      0.85      0.84        77
     weighted avg       0.88      0.90      0.88        77

```
### **Confustion matrix**
```
[[ 8  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0  0]
 [ 1  0  0  0 11  0  0  0  0  0  0  0]
 [ 0  0  0  0  1 12  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 11  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  7  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       1.00      0.60      0.75         5
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      1.00      1.00         1
             Drug       0.94      1.00      0.97        16
            Fraud       1.00      0.71      0.83         7
         Gambling       1.00      0.83      0.91         6
           Murder       0.91      1.00      0.95        10
National Security       0.83      1.00      0.91         5
        Non-crime       1.00      1.00      1.00         2
     Sexual Abuse       0.80      1.00      0.89        12
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.86      1.00      0.92         6
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.91        77
        macro avg       0.88      0.83      0.84        77
     weighted avg       0.91      0.91      0.90        77

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  5  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 10  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  1]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      1.00      0.89         4
Battery / Assault       1.00      0.25      0.40         4
          Bribery       1.00      1.00      1.00         1
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.79      0.79      0.79        14
            Fraud       0.85      0.85      0.85        13
         Gambling       1.00      1.00      1.00         5
           Murder       0.80      0.92      0.86        13
National Security       0.50      1.00      0.67         1
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.92      0.92      0.92        13
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.80      1.00      0.89         4
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.83        77
        macro avg       0.71      0.73      0.68        77
     weighted avg       0.83      0.83      0.81        77

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  2  0  0  1  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 11  1  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  2 11  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 12  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  1]
 [ 1  0  0  0  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       1.00      0.25      0.40         4
          Bribery       1.00      0.40      0.57         5
   Cyber Security       1.00      1.00      1.00         1
             Drug       0.93      1.00      0.97        14
            Fraud       0.75      0.92      0.83        13
         Gambling       1.00      1.00      1.00         7
           Murder       0.90      1.00      0.95         9
National Security       1.00      1.00      1.00         3
     Sexual Abuse       0.82      1.00      0.90         9
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       1.00      0.75      0.86         4
      Trafficking       1.00      1.00      1.00         4

         accuracy                           0.90        77
        macro avg       0.95      0.87      0.88        77
     weighted avg       0.91      0.90      0.88        77

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  1  0  1  0  1  0  0  0]
 [ 0  0  2  0  1  2  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0 12  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  9  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.60      0.75         5
Battery / Assault       0.50      0.25      0.33         4
          Bribery       1.00      1.00      1.00         3
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.88      0.78      0.82        18
            Fraud       0.69      1.00      0.81        11
         Gambling       0.50      1.00      0.67         1
           Murder       0.76      1.00      0.87        13
National Security       0.50      1.00      0.67         1
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.80      0.73      0.76        11
 Theft / Burglary       0.75      0.50      0.60         6
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.78        77
        macro avg       0.72      0.72      0.69        77
     weighted avg       0.79      0.78      0.76        77

```
### **Confustion matrix**
```
[[ 3  1  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  1  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0 14  2  0  0  0  0  1  1  0]
 [ 0  0  0  0  0 11  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 13  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  1  1  1  0  0  8  0  0]
 [ 0  0  0  0  1  2  0  0  0  0  0  3  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  1]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         5
Battery / Assault       0.50      0.17      0.25         6
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.93      0.93      0.93        15
            Fraud       0.80      1.00      0.89         8
         Gambling       1.00      1.00      1.00         7
           Murder       0.75      0.92      0.83        13
National Security       0.80      1.00      0.89         4
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.80      1.00      0.89         8
 Theft / Burglary       0.75      0.75      0.75         4
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.84        77
        macro avg       0.72      0.71      0.70        77
     weighted avg       0.80      0.84      0.81        77

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  4  0  0  1  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  8  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 12  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  8  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  1]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00        12
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.86      0.80      0.83        15
            Fraud       0.71      1.00      0.83        10
         Gambling       1.00      1.00      1.00         3
           Murder       0.76      0.94      0.84        17
National Security       1.00      0.50      0.67         2
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       1.00      0.80      0.89         5
 Theft / Burglary       1.00      1.00      1.00         5
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.84        77
        macro avg       0.78      0.66      0.69        77
     weighted avg       0.84      0.84      0.83        77

```
### **Confustion matrix**
```
[[12  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0 12  0  0  3  0  0  0  0  0]
 [ 0  0  0  0 10  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  0  0  1  0 16  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  1  0  0  0  0]
 [ 0  0  0  1  0  0  1  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  4  0  1]
 [ 0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         3
Battery / Assault       1.00      0.40      0.57         5
   Cyber Security       1.00      1.00      1.00         1
             Drug       0.84      0.89      0.86        18
            Fraud       0.92      0.86      0.89        14
         Gambling       0.67      1.00      0.80         2
           Murder       0.64      0.90      0.75        10
National Security       1.00      1.00      1.00         4
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.83      0.91      0.87        11
 Theft / Burglary       1.00      0.86      0.92         7

         accuracy                           0.84        76
        macro avg       0.81      0.77      0.77        76
     weighted avg       0.86      0.84      0.83        76

```
### **Confustion matrix**
```
[[ 2  0  0  1  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  3  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0 16  0  0  1  0  0  1  0]
 [ 0  0  0  1 12  1  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  9  0  0  1  0]
 [ 0  0  0  0  0  0  0  4  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0 10  0]
 [ 0  0  0  1  0  0  0  0  0  0  6]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      1.00      0.80         2
Battery / Assault       0.75      1.00      0.86         3
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.00      0.00      0.00         3
             Drug       0.90      0.95      0.93        20
            Fraud       0.80      0.67      0.73         6
         Gambling       0.80      1.00      0.89         4
           Murder       0.78      1.00      0.88        14
National Security       1.00      0.50      0.67         2
     Sexual Abuse       1.00      0.85      0.92        13
 Theft / Burglary       0.83      1.00      0.91         5
      Trafficking       1.00      0.50      0.67         2

         accuracy                           0.86        76
        macro avg       0.79      0.75      0.74        76
     weighted avg       0.84      0.86      0.83        76

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  1  1  0  0  0  0]
 [ 0  0  0  0 19  0  0  0  0  0  1  0]
 [ 0  0  0  0  1  4  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 14  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  1  0  0  0]
 [ 0  0  0  0  1  0  0  1  0 11  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  5  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  1]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.89      0.92      0.88      4.90
Battery / Assault:        0.68      0.39      0.46      3.30
Bribery:                  0.90      0.71      0.78      2.30
Cyber Security:           0.40      0.40      0.40      1.50
Drug:                     0.88      0.90      0.89     15.70
Fraud:                    0.83      0.89      0.85     11.20
Gambling:                 0.90      0.92      0.88      4.70
Murder:                   0.80      0.93      0.86     12.10
National Security:        0.80      0.90      0.80      3.00
Sexual Abuse:             0.88      0.91      0.89      9.70
State Crime:              0.10      0.10      0.10      0.60
Theft / Burglary:         0.90      0.86      0.87      5.00
Trafficking:              0.70      0.60      0.60      1.60
Non-crime:                0.40      0.28      0.32      1.20

Accuracy                                      0.85     76.80
Weighted avg:             0.79      0.76      0.75     76.80
Macro avg:                0.85      0.85      0.83     76.80
```
