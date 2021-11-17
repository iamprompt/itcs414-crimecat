# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.82      0.75      0.78        12
Battery / Assault       0.60      0.60      0.60        10
          Bribery       1.00      0.33      0.50         3
   Cyber Security       0.50      0.20      0.29         5
             Drug       0.93      0.88      0.90        16
            Fraud       0.78      1.00      0.88        25
         Gambling       1.00      0.86      0.92         7
           Murder       0.78      0.91      0.84        23
National Security       0.83      0.88      0.86        17
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.83      0.83      0.83        12
      State Crime       1.00      0.50      0.67         4
 Theft / Burglary       0.90      1.00      0.95         9
      Trafficking       1.00      0.60      0.75         5

         accuracy                           0.82       151
        macro avg       0.86      0.72      0.75       151
     weighted avg       0.83      0.82      0.81       151

```
### **Confustion matrix**
```
[[ 9  1  0  0  0  0  0  1  0  0  0  0  1  0]
 [ 0  6  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  1  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  3  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 14  1  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0 25  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 1  0  0  0  1  0  0 21  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  1 15  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  1  0  0  0  1  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  9  0]
 [ 1  0  0  0  0  0  0  0  0  0  1  0  0  3]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.89      0.94         9
Battery / Assault       0.90      0.60      0.72        15
          Bribery       0.33      0.50      0.40         2
   Cyber Security       0.67      0.67      0.67         3
             Drug       0.88      1.00      0.93        14
            Fraud       0.92      0.85      0.88        27
         Gambling       1.00      1.00      1.00         7
           Murder       0.76      1.00      0.86        25
National Security       0.88      0.96      0.92        24
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       1.00      0.71      0.83         7
      State Crime       1.00      0.50      0.67         4
 Theft / Burglary       0.89      1.00      0.94         8
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.87       151
        macro avg       0.87      0.78      0.81       151
     weighted avg       0.88      0.87      0.86       151

```
### **Confustion matrix**
```
[[ 8  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  9  0  0  1  0  0  5  0  0  0  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  0  0  0]
 [ 0  0  1  1  1 23  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 25  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 23  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  1  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  8  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.83      0.91         6
Battery / Assault       0.90      0.64      0.75        14
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.85      0.94      0.89        18
            Fraud       0.83      0.88      0.86        17
         Gambling       1.00      1.00      1.00         6
           Murder       0.72      0.91      0.81        23
National Security       0.90      0.82      0.86        22
        Non-crime       0.00      0.00      0.00         3
     Sexual Abuse       0.92      0.86      0.89        14
      State Crime       0.40      1.00      0.57         2
 Theft / Burglary       0.85      0.79      0.81        14
      Trafficking       1.00      1.00      1.00         9

         accuracy                           0.84       151
        macro avg       0.74      0.76      0.74       151
     weighted avg       0.84      0.84      0.83       151

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  9  0  0  1  0  0  4  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 17  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0 15  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 21  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0  1 18  0  0  3  0  0]
 [ 0  1  0  0  1  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2  0  0]
 [ 0  0  0  0  0  2  0  1  0  0  0  0 11  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  9]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.78      0.88      0.82         8
Battery / Assault       0.71      0.56      0.63         9
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.50      0.25      0.33         4
             Drug       1.00      0.92      0.96        24
            Fraud       0.80      0.92      0.86        13
         Gambling       1.00      1.00      1.00        12
           Murder       0.88      0.90      0.89        42
National Security       0.86      1.00      0.92        18
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.75      1.00      0.86         6
      State Crime       0.50      0.33      0.40         3
 Theft / Burglary       1.00      1.00      1.00         5
      Trafficking       0.50      0.50      0.50         2

         accuracy                           0.87       151
        macro avg       0.81      0.74      0.76       151
     weighted avg       0.86      0.87      0.86       151

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  2  0  0  1  1  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 22  0  0  1  0  0  0  0  0  1]
 [ 0  0  0  1  0 12  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 12  0  0  0  0  0  0  0]
 [ 1  2  0  0  0  0  0 38  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      1.00      0.86         6
Battery / Assault       0.92      0.86      0.89        14
          Bribery       1.00      0.75      0.86         4
   Cyber Security       0.50      1.00      0.67         2
             Drug       0.83      0.95      0.89        21
            Fraud       0.90      0.79      0.84        24
         Gambling       1.00      1.00      1.00        11
           Murder       0.89      0.85      0.87        20
National Security       0.80      0.92      0.86        13
        Non-crime       1.00      0.40      0.57         5
     Sexual Abuse       0.81      0.93      0.87        14
      State Crime       0.50      0.33      0.40         3
 Theft / Burglary       1.00      1.00      1.00        11
      Trafficking       1.00      0.67      0.80         3

         accuracy                           0.87       151
        macro avg       0.85      0.82      0.81       151
     weighted avg       0.88      0.87      0.86       151

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0 12  0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  0  3  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 20  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  2  2 19  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0 11  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  1  0 17  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 12  0  0  1  0  0]
 [ 2  0  0  0  0  0  0  0  1  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0 11  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  2]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         5
Battery / Assault       0.94      0.83      0.88        18
          Bribery       0.50      1.00      0.67         2
   Cyber Security       1.00      0.67      0.80         3
             Drug       1.00      0.94      0.97        17
            Fraud       0.94      0.94      0.94        17
         Gambling       1.00      1.00      1.00        10
           Murder       0.86      0.96      0.91        26
National Security       0.84      0.95      0.89        22
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.93      0.93      0.93        14
      State Crime       0.50      0.20      0.29         5
 Theft / Burglary       0.88      0.88      0.88         8
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.90       151
        macro avg       0.81      0.81      0.80       151
     weighted avg       0.90      0.90      0.89       151

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0 15  0  0  0  0  0  1  0  0  1  0  1  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  1  0  0  0  0  0  0]
 [ 0  0  1  0  0 16  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 10  0  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0 25  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 21  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.67      0.67         6
Battery / Assault       0.64      1.00      0.78         7
          Bribery       1.00      0.71      0.83         7
   Cyber Security       1.00      0.29      0.44         7
             Drug       0.85      0.74      0.79        23
            Fraud       0.71      0.89      0.79        19
         Gambling       0.80      0.67      0.73         6
           Murder       0.81      0.89      0.85        19
National Security       0.88      1.00      0.93        21
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       1.00      0.83      0.91        12
      State Crime       1.00      0.50      0.67         4
 Theft / Burglary       0.85      0.92      0.88        12
      Trafficking       0.57      0.80      0.67         5

         accuracy                           0.81       150
        macro avg       0.77      0.71      0.71       150
     weighted avg       0.82      0.81      0.79       150

```
### **Confustion matrix**
```
[[ 4  1  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  5  0  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  2  0  4  0  0  1  0  0  0  0  0]
 [ 1  1  0  0 17  0  0  2  0  0  0  0  1  1]
 [ 0  0  0  0  0 17  1  1  0  0  0  0  0  0]
 [ 0  0  0  0  2  0  4  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 17  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0  0 21  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  1]
 [ 0  1  0  0  0  0  0  0  0  0 10  0  0  1]
 [ 0  1  0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0 11  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       0.33      0.50      0.40         4
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.67      0.67      0.67         6
             Drug       0.85      0.85      0.85        20
            Fraud       0.75      0.94      0.83        16
         Gambling       1.00      0.90      0.95        10
           Murder       0.77      0.86      0.81        28
National Security       0.76      0.89      0.82        18
     Sexual Abuse       0.87      0.87      0.87        15
      State Crime       0.75      0.38      0.50         8
 Theft / Burglary       1.00      0.83      0.91        12
      Trafficking       1.00      0.50      0.67         6

         accuracy                           0.81       150
        macro avg       0.83      0.74      0.76       150
     weighted avg       0.82      0.81      0.80       150

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  2  0  1  1  0  0  0  0  0  0  0]
 [ 0  0  0  4  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  1 17  0  0  2  0  0  0  0  0]
 [ 0  0  0  1  0 15  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  9  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0 24  0  1  0  0  0]
 [ 0  0  0  0  0  1  0  0 16  0  1  0  0]
 [ 0  1  0  0  0  0  0  1  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  3  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0 10  0]
 [ 0  0  0  0  2  0  0  0  0  1  0  0  3]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      0.86      0.86         7
Battery / Assault       1.00      0.50      0.67         6
          Bribery       0.80      0.50      0.62         8
   Cyber Security       0.50      0.67      0.57         3
             Drug       0.88      0.88      0.88        16
            Fraud       0.80      0.86      0.83        28
         Gambling       1.00      0.94      0.97        17
           Murder       0.88      1.00      0.94        30
National Security       0.88      1.00      0.94        15
     Sexual Abuse       0.83      0.83      0.83         6
      State Crime       1.00      0.67      0.80         6
 Theft / Burglary       1.00      0.83      0.91         6
      Trafficking       0.67      1.00      0.80         2

         accuracy                           0.87       150
        macro avg       0.85      0.81      0.82       150
     weighted avg       0.88      0.87      0.86       150

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  2  0  1  0  0  0]
 [ 0  0  4  0  1  2  0  0  0  0  0  0  1]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  2  0  0  0  0  0  0  0]
 [ 0  0  1  2  1 24  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1 16  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 30  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 15  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  4  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         1
Battery / Assault       1.00      0.73      0.84        11
          Bribery       1.00      0.71      0.83         7
   Cyber Security       1.00      0.60      0.75         5
             Drug       0.76      0.93      0.84        14
            Fraud       0.89      0.89      0.89        27
         Gambling       0.89      0.89      0.89         9
           Murder       0.93      1.00      0.96        26
National Security       0.60      0.92      0.73        13
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      1.00      1.00        10
      State Crime       0.50      0.20      0.29         5
 Theft / Burglary       0.85      0.79      0.81        14
      Trafficking       1.00      1.00      1.00         7

         accuracy                           0.86       150
        macro avg       0.82      0.76      0.77       150
     weighted avg       0.87      0.86      0.85       150

```
### **Confustion matrix**
```
[[ 1  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  8  0  0  0  0  0  2  1  0  0  0  0  0]
 [ 0  0  5  0  0  1  1  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0 13  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  3 24  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 26  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 12  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  1  0  0]
 [ 0  0  0  0  1  2  0  0  0  0  0  0 11  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  7]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.89      0.89      0.88      6.30
Battery / Assault:        0.79      0.68      0.72     10.80
Bribery:                  0.86      0.67      0.72      4.20
Cyber Security:           0.63      0.50      0.52      3.90
Drug:                     0.88      0.90      0.89     18.30
Fraud:                    0.83      0.90      0.86     21.30
Gambling:                 0.97      0.93      0.95      9.50
Murder:                   0.83      0.93      0.87     26.20
National Security:        0.82      0.93      0.87     18.30
Sexual Abuse:             0.89      0.88      0.88     11.00
State Crime:              0.71      0.46      0.52      4.40
Theft / Burglary:         0.92      0.90      0.91      9.90
Trafficking:              0.87      0.78      0.80      4.60
Non-crime:                0.40      0.21      0.27      1.90

Accuracy                                      0.85    150.60
Weighted avg:             0.82      0.77      0.77    150.60
Macro avg:                0.86      0.85      0.84    150.60
```
