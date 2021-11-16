# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         7
Battery / Assault       1.00      0.43      0.60         7
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.67      0.50      0.57         4
             Drug       0.95      0.95      0.95        19
            Fraud       0.73      0.89      0.80        18
         Gambling       1.00      1.00      1.00         7
           Murder       0.83      1.00      0.91        25
National Security       0.75      0.94      0.83        16
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       1.00      0.88      0.93         8
      State Crime       1.00      0.20      0.33         5
 Theft / Burglary       1.00      0.77      0.87        13
      Trafficking       0.80      1.00      0.89         4

         accuracy                           0.86       137
        macro avg       0.91      0.80      0.82       137
     weighted avg       0.88      0.86      0.85       137

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  3  1  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 18  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  1  1 16  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 25  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 15  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  1  0  0]
 [ 0  0  0  0  0  3  0  0  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       0.71      1.00      0.83         5
   Cyber Security       0.25      0.50      0.33         2
             Drug       0.85      0.92      0.88        12
            Fraud       0.83      0.83      0.83        24
         Gambling       1.00      0.83      0.91         6
           Murder       0.79      0.90      0.84        21
National Security       0.87      0.93      0.90        28
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       1.00      0.91      0.95        11
      State Crime       1.00      0.20      0.33         5
 Theft / Burglary       0.93      0.87      0.90        15
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.85       137
        macro avg       0.79      0.75      0.74       137
     weighted avg       0.85      0.85      0.84       137

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0 11  1  0  0  0  0  0  0  0  0]
 [ 0  0  2  0 20  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  1  5  0  0  0  0  0  0  0]
 [ 0  1  0  1  0  0 19  0  0  0  0  0  0]
 [ 0  0  1  0  1  0  0 26  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0 10  0  0  0]
 [ 0  1  0  0  0  0  0  3  0  0  1  0  0]
 [ 0  0  0  1  0  0  1  0  0  0  0 13  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.71      1.00      0.83         5
Battery / Assault       0.80      0.53      0.64        15
          Bribery       1.00      0.40      0.57         5
   Cyber Security       0.50      0.50      0.50         2
             Drug       0.89      0.81      0.85        21
            Fraud       0.85      0.94      0.89        18
         Gambling       1.00      1.00      1.00         6
           Murder       0.70      0.82      0.75        28
National Security       0.92      0.92      0.92        12
        Non-crime       1.00      1.00      1.00         2
     Sexual Abuse       0.67      1.00      0.80        10
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       1.00      0.80      0.89         5
      Trafficking       1.00      0.57      0.73         7

         accuracy                           0.81       137
        macro avg       0.86      0.81      0.81       137
     weighted avg       0.83      0.81      0.80       137

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  8  0  0  1  0  0  5  0  0  1  0  0  0]
 [ 0  0  2  0  1  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  0  0  4  0  0  0  0  0  0]
 [ 0  0  0  0  0 17  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 1  2  0  0  0  0  0 23  0  0  2  0  0  0]
 [ 0  0  0  1  0  0  0  0 11  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  4  0]
 [ 1  0  0  0  0  0  0  0  0  0  2  0  0  4]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         6
Battery / Assault       1.00      0.27      0.42        15
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.50      1.00      0.67         1
             Drug       0.90      0.82      0.86        11
            Fraud       0.88      0.91      0.89        23
         Gambling       1.00      0.83      0.91         6
           Murder       0.68      1.00      0.81        28
National Security       0.80      1.00      0.89        16
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.92      0.85      0.88        13
      State Crime       1.00      0.33      0.50         6
 Theft / Burglary       0.71      0.83      0.77         6
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.82       136
        macro avg       0.88      0.82      0.81       136
     weighted avg       0.86      0.82      0.80       136

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0 11  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  9  1  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  1 21  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 28  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 16  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.67      0.67         3
Battery / Assault       1.00      0.70      0.82        10
          Bribery       1.00      0.50      0.67         2
   Cyber Security       1.00      0.33      0.50         6
             Drug       0.88      0.92      0.90        24
            Fraud       0.87      0.95      0.91        21
         Gambling       1.00      0.75      0.86         4
           Murder       0.89      0.96      0.93        26
National Security       0.78      1.00      0.88        14
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.73      1.00      0.85        11
      State Crime       1.00      0.50      0.67         2
 Theft / Burglary       1.00      0.80      0.89        10
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.87       136
        macro avg       0.84      0.72      0.75       136
     weighted avg       0.88      0.87      0.86       136

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  7  0  0  0  0  0  1  0  0  2  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  3  0  0  0  0  0]
 [ 1  0  0  0 22  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  1 20  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 25  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 14  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      0.86      0.86         7
Battery / Assault       0.40      0.40      0.40         5
          Bribery       1.00      0.80      0.89         5
   Cyber Security       0.00      0.00      0.00         3
             Drug       0.75      0.94      0.83        16
            Fraud       0.78      0.88      0.82        16
         Gambling       1.00      1.00      1.00         9
           Murder       0.86      0.93      0.89        27
National Security       0.83      0.90      0.86        21
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.89      0.73      0.80        11
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       1.00      0.71      0.83         7
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.81       136
        macro avg       0.67      0.64      0.65       136
     weighted avg       0.79      0.81      0.80       136

```
### **Confustion matrix**
```
[[ 6  1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  4  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  2  0 14  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 1  0  0  0  1  0  0 25  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0 19  0  0  1  0  0]
 [ 0  0  0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  1  0  0  0  1  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  3]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.78      0.88         9
Battery / Assault       0.60      0.50      0.55         6
          Bribery       1.00      0.60      0.75         5
   Cyber Security       0.50      0.25      0.33         4
             Drug       0.95      0.83      0.88        23
            Fraud       0.81      1.00      0.89        21
         Gambling       0.89      0.89      0.89         9
           Murder       0.75      0.95      0.84        22
National Security       0.82      0.95      0.88        19
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       1.00      0.67      0.80         9
      State Crime       0.50      0.33      0.40         3
 Theft / Burglary       0.75      1.00      0.86         3
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.83       136
        macro avg       0.83      0.73      0.76       136
     weighted avg       0.84      0.83      0.82       136

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  3  0  1  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  1 19  1  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  0 21  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  8  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 21  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  1  0  0  0  0]
 [ 0  1  0  0  0  1  1  0  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         6
Battery / Assault       0.80      0.57      0.67         7
          Bribery       1.00      1.00      1.00         3
   Cyber Security       1.00      0.80      0.89         5
             Drug       0.93      1.00      0.97        14
            Fraud       0.92      0.85      0.88        26
         Gambling       1.00      1.00      1.00         8
           Murder       0.76      1.00      0.86        22
National Security       0.82      0.88      0.85        16
        Non-crime       1.00      0.75      0.86         4
     Sexual Abuse       1.00      0.91      0.95        11
      State Crime       0.50      0.20      0.29         5
 Theft / Burglary       0.88      0.88      0.88         8
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.88       136
        macro avg       0.86      0.84      0.84       136
     weighted avg       0.88      0.88      0.87       136

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  4  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1 22  0  2  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 22  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 14  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 10  0  0  1]
 [ 0  1  0  0  0  0  0  0  3  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       0.83      0.71      0.77         7
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.40      0.57         5
             Drug       0.93      0.93      0.93        14
            Fraud       0.86      0.95      0.90        20
         Gambling       1.00      0.88      0.93         8
           Murder       0.83      1.00      0.91        25
National Security       1.00      0.91      0.95        23
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      0.92      0.96        12
      State Crime       0.33      1.00      0.50         1
 Theft / Burglary       1.00      1.00      1.00         7
      Trafficking       0.86      1.00      0.92         6

         accuracy                           0.90       136
        macro avg       0.83      0.82      0.80       136
     weighted avg       0.91      0.90      0.90       136

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 13  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  1 19  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 25  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 21  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  0  0  0  1  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  6]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.40      0.50         5
Battery / Assault       0.75      0.50      0.60         6
          Bribery       0.75      0.75      0.75         4
   Cyber Security       0.33      0.50      0.40         2
             Drug       0.91      0.91      0.91        22
            Fraud       1.00      0.79      0.88        19
         Gambling       0.88      1.00      0.93         7
           Murder       0.77      0.96      0.86        25
National Security       0.85      1.00      0.92        17
     Sexual Abuse       0.92      0.92      0.92        13
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       1.00      0.89      0.94         9
      Trafficking       1.00      1.00      1.00         5

         accuracy                           0.86       136
        macro avg       0.76      0.74      0.74       136
     weighted avg       0.86      0.86      0.85       136

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  3  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0 20  0  0  1  0  1  0  0  0]
 [ 0  0  0  2  1 15  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0 24  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 17  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.89      0.80      0.83      5.80
Battery / Assault:        0.79      0.56      0.63      8.30
Bribery:                  0.88      0.67      0.74      3.10
Cyber Security:           0.57      0.48      0.48      3.40
Drug:                     0.89      0.90      0.90     17.60
Fraud:                    0.85      0.90      0.87     20.60
Gambling:                 0.98      0.92      0.94      7.00
Murder:                   0.79      0.95      0.86     24.90
National Security:        0.84      0.94      0.89     18.20
Sexual Abuse:             0.91      0.88      0.88     10.90
State Crime:              0.63      0.38      0.40      3.30
Theft / Burglary:         0.93      0.85      0.88      8.30
Trafficking:              0.92      0.93      0.91      3.30
Non-crime:                0.50      0.42      0.45      1.60

Accuracy                                      0.85    136.30
Weighted avg:             0.82      0.77      0.77    136.30
Macro avg:                0.86      0.85      0.84    136.30
```
