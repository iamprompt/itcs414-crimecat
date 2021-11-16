# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       0.80      0.62      0.70        13
          Bribery       1.00      0.50      0.67         6
   Cyber Security       0.33      0.25      0.29         4
             Drug       0.94      0.85      0.89        20
            Fraud       0.82      0.95      0.88        19
         Gambling       0.75      1.00      0.86         6
           Murder       0.88      1.00      0.94        29
National Security       0.88      0.88      0.88        17
     Sexual Abuse       0.92      0.85      0.88        13
      State Crime       1.00      0.67      0.80         3
 Theft / Burglary       0.83      1.00      0.91        10
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.86       146
        macro avg       0.86      0.81      0.82       146
     weighted avg       0.87      0.86      0.86       146

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  8  0  0  0  0  0  3  0  1  0  1  0]
 [ 0  0  3  0  1  1  1  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  1  0  0  0  0]
 [ 0  1  0  0 17  1  0  0  0  0  0  1  0]
 [ 0  0  0  0  0 18  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 29  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  1 15  0  0  0  0]
 [ 0  1  0  1  0  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.88      0.93         8
Battery / Assault       0.60      0.43      0.50         7
          Bribery       0.67      0.67      0.67         3
   Cyber Security       1.00      0.25      0.40         4
             Drug       0.89      0.71      0.79        24
            Fraud       0.68      0.86      0.76        22
         Gambling       1.00      0.83      0.91        12
           Murder       0.68      1.00      0.81        19
National Security       0.79      0.85      0.81        13
        Non-crime       1.00      0.33      0.50         6
     Sexual Abuse       0.88      1.00      0.93         7
      State Crime       0.80      0.80      0.80         5
 Theft / Burglary       0.90      0.82      0.86        11
      Trafficking       0.83      1.00      0.91         5

         accuracy                           0.79       146
        macro avg       0.84      0.74      0.76       146
     weighted avg       0.82      0.79      0.79       146

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  3  0  0  0  1  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  3  0  0  0  0  0  0  0  0]
 [ 0  1  0  0 17  1  0  2  0  0  1  0  1  1]
 [ 0  0  1  0  1 19  0  1  0  0  0  0  0  0]
 [ 0  1  0  0  0  1 10  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 19  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  1 11  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  1  2  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  4  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      0.80      0.80         5
Battery / Assault       1.00      0.77      0.87        13
          Bribery       0.75      1.00      0.86         3
   Cyber Security       0.33      0.33      0.33         3
             Drug       0.89      0.94      0.91        17
            Fraud       0.82      0.82      0.82        17
         Gambling       0.86      1.00      0.92         6
           Murder       0.78      0.96      0.86        26
National Security       0.92      0.96      0.94        23
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.91      0.83      0.87        12
      State Crime       0.50      0.33      0.40         3
 Theft / Burglary       1.00      0.75      0.86        12
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.86       146
        macro avg       0.75      0.74      0.74       146
     weighted avg       0.86      0.86      0.85       146

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0 10  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  1  0  0  0  0  0  0]
 [ 0  0  1  2  0 14  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 25  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 22  0  0  1  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  1  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  2  0  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  4]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.88      1.00      0.93         7
Battery / Assault       0.89      0.89      0.89         9
          Bribery       0.00      0.00      0.00         1
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.75      1.00      0.86        12
            Fraud       0.92      0.85      0.88        26
         Gambling       1.00      1.00      1.00         5
           Murder       0.90      0.90      0.90        29
National Security       0.85      0.96      0.90        23
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       1.00      0.94      0.97        16
      State Crime       0.67      0.67      0.67         3
 Theft / Burglary       1.00      0.60      0.75         5
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.87       146
        macro avg       0.77      0.71      0.72       146
     weighted avg       0.88      0.87      0.87       146

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  8  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 12  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  1 22  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  1  0  0  2  0  0 26  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 22  0  0  1  0  0]
 [ 0  0  0  1  0  0  0  0  1  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0 15  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  1  0  0  1  0  0  0  0  3  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.78      0.70      0.74        10
Battery / Assault       0.86      0.60      0.71        10
          Bribery       1.00      0.80      0.89         5
   Cyber Security       1.00      0.33      0.50         6
             Drug       0.84      0.94      0.89        17
            Fraud       0.85      0.88      0.86        25
         Gambling       1.00      1.00      1.00         7
           Murder       0.83      1.00      0.91        24
National Security       0.63      0.92      0.75        13
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.82      1.00      0.90         9
      State Crime       0.33      0.14      0.20         7
 Theft / Burglary       0.80      0.67      0.73         6
      Trafficking       1.00      0.60      0.75         5

         accuracy                           0.81       145
        macro avg       0.84      0.76      0.77       145
     weighted avg       0.82      0.81      0.80       145

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  2  0  0  1  0  0  0]
 [ 1  6  0  0  0  0  0  2  0  0  0  1  0  0]
 [ 0  0  4  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  2  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  2 22  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 24  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 12  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  9  0  0  0]
 [ 0  1  0  0  0  0  0  0  5  0  0  1  0  0]
 [ 1  0  0  0  0  1  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  1  0  0  0  0  0  1  0  0  3]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      1.00      0.89         4
Battery / Assault       1.00      0.42      0.59        12
          Bribery       1.00      0.20      0.33         5
   Cyber Security       1.00      0.75      0.86         4
             Drug       0.81      0.93      0.87        14
            Fraud       0.83      0.95      0.88        20
         Gambling       1.00      0.88      0.93         8
           Murder       0.79      0.96      0.87        28
National Security       0.75      1.00      0.86        18
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.78      1.00      0.88         7
      State Crime       1.00      0.25      0.40         8
 Theft / Burglary       0.91      0.91      0.91        11
      Trafficking       1.00      1.00      1.00         5

         accuracy                           0.83       145
        macro avg       0.83      0.73      0.73       145
     weighted avg       0.86      0.83      0.81       145

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  5  0  0  1  0  0  5  0  0  1  0  0  0]
 [ 0  0  1  0  1  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  1  0  0  0  0  0  0  0  0]
 [ 1  0  0  0 13  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1 19  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 27  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  6  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      0.83      0.83         6
Battery / Assault       0.88      0.78      0.82         9
          Bribery       0.83      0.83      0.83         6
   Cyber Security       0.50      0.33      0.40         3
             Drug       0.87      0.91      0.89        22
            Fraud       0.86      0.95      0.90        20
         Gambling       1.00      0.86      0.92         7
           Murder       0.82      0.92      0.87        25
National Security       0.91      0.91      0.91        22
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.62      0.71      0.67         7
      State Crime       0.50      0.50      0.50         2
 Theft / Burglary       1.00      0.88      0.93         8
      Trafficking       1.00      0.60      0.75         5

         accuracy                           0.86       145
        macro avg       0.83      0.76      0.79       145
     weighted avg       0.86      0.86      0.85       145

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  5  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 20  0  0  0  0  0  2  0  0  0]
 [ 0  0  0  1  0 19  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  6  0  0  0  0  0  0  0]
 [ 0  0  1  0  1  0  0 23  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0 20  0  0  1  0  0]
 [ 0  0  0  0  1  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  7  0]
 [ 1  0  0  0  0  0  0  0  0  0  1  0  0  3]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.88      1.00      0.93         7
Battery / Assault       1.00      0.80      0.89        10
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.67      0.33      0.44         6
             Drug       0.87      0.81      0.84        16
            Fraud       0.74      0.94      0.83        18
         Gambling       0.90      1.00      0.95         9
           Murder       0.82      0.96      0.88        24
National Security       0.90      0.95      0.93        20
        Non-crime       1.00      1.00      1.00         2
     Sexual Abuse       1.00      0.79      0.88        14
      State Crime       0.50      0.50      0.50         2
 Theft / Burglary       1.00      0.83      0.91         6
      Trafficking       1.00      1.00      1.00         7

         accuracy                           0.87       145
        macro avg       0.88      0.82      0.83       145
     weighted avg       0.88      0.87      0.86       145

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  8  0  0  1  0  0  1  0  0  0  0  0  0]
 [ 0  0  2  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  3  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 13  1  0  2  0  0  0  0  0  0]
 [ 0  0  0  1  0 17  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0 23  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 19  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  1  2  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  7]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       0.88      0.64      0.74        11
          Bribery       0.75      1.00      0.86         3
   Cyber Security       1.00      1.00      1.00         2
             Drug       0.93      0.88      0.90        16
            Fraud       0.94      0.89      0.91        18
         Gambling       1.00      1.00      1.00         6
           Murder       0.97      0.97      0.97        32
National Security       0.85      0.94      0.89        18
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.81      0.93      0.87        14
      State Crime       0.75      0.60      0.67         5
 Theft / Burglary       0.85      0.85      0.85        13
      Trafficking       0.25      1.00      0.40         1

         accuracy                           0.88       145
        macro avg       0.78      0.82      0.78       145
     weighted avg       0.89      0.88      0.88       145

```
### **Confustion matrix**
```
[[ 4  1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  0  1  0  2  0  1  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  0  1  1]
 [ 0  0  1  0  1 16  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 31  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 17  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  0  0  0  0  0  0 13  0  0  1]
 [ 0  0  0  0  0  0  0  0  2  0  0  3  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  0 11  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      0.80      0.80         5
Battery / Assault       0.79      0.79      0.79        14
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.50      1.00      0.67         2
             Drug       0.92      0.96      0.94        23
            Fraud       0.88      0.92      0.90        24
         Gambling       1.00      0.83      0.91         6
           Murder       0.81      0.89      0.85        19
National Security       0.78      0.88      0.82        16
     Sexual Abuse       1.00      0.82      0.90        11
      State Crime       1.00      0.33      0.50         6
 Theft / Burglary       0.93      1.00      0.96        13
      Trafficking       1.00      0.67      0.80         3

         accuracy                           0.86       145
        macro avg       0.88      0.81      0.82       145
     weighted avg       0.88      0.86      0.86       145

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0 11  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1 22  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1 22  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  1  5  0  0  0  0  0  0]
 [ 1  1  0  0  0  0  0 17  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0 14  0  0  0  0]
 [ 0  2  0  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0 13  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  2]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.88      0.88      0.87      6.00
Battery / Assault:        0.87      0.67      0.75     10.80
Bribery:                  0.80      0.62      0.66      3.90
Cyber Security:           0.63      0.46      0.49      3.60
Drug:                     0.87      0.89      0.88     18.10
Fraud:                    0.83      0.90      0.86     20.90
Gambling:                 0.95      0.94      0.94      7.20
Murder:                   0.83      0.96      0.89     25.50
National Security:        0.83      0.92      0.87     18.30
Sexual Abuse:             0.87      0.89      0.87     11.00
State Crime:              0.70      0.48      0.54      4.40
Theft / Burglary:         0.92      0.83      0.87      9.50
Trafficking:              0.91      0.85      0.84      4.40
Non-crime:                0.50      0.33      0.38      1.80

Accuracy                                      0.85    145.40
Weighted avg:             0.83      0.77      0.78    145.40
Macro avg:                0.86      0.85      0.84    145.40
```
