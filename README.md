# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.56      0.71         9
Battery / Assault       1.00      0.62      0.76        13
          Bribery       1.00      0.33      0.50         3
   Cyber Security       0.50      0.67      0.57         3
             Drug       0.93      1.00      0.96        13
            Fraud       0.83      0.90      0.86        21
         Gambling       1.00      0.80      0.89         5
           Murder       0.69      1.00      0.82        25
National Security       0.90      0.90      0.90        21
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       1.00      0.88      0.93         8
      State Crime       0.75      0.60      0.67         5
 Theft / Burglary       0.88      0.88      0.88         8
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.84       139
        macro avg       0.89      0.78      0.81       139
     weighted avg       0.87      0.84      0.84       139

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  8  0  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  0  1  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 13  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0 19  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 25  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 19  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  3  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  3]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.88      0.88      0.88         8
Battery / Assault       0.50      0.50      0.50         4
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      1.00      1.00         1
             Drug       0.77      0.77      0.77        13
            Fraud       0.95      0.95      0.95        21
         Gambling       1.00      1.00      1.00         7
           Murder       0.81      0.93      0.87        28
National Security       1.00      1.00      1.00        19
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.90      0.90      0.90        10
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       1.00      0.84      0.91        19
      Trafficking       0.83      0.83      0.83         6

         accuracy                           0.89       139
        macro avg       0.83      0.83      0.83       139
     weighted avg       0.89      0.89      0.89       139

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0 10  0  0  1  0  0  0  0  0  1]
 [ 0  0  0  0  1 20  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 1  0  0  0  1  0  0 26  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 19  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  1  1  0  1  0  0  0  0 16  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  5]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      0.86      0.86         7
Battery / Assault       0.83      0.77      0.80        13
          Bribery       1.00      0.75      0.86         4
   Cyber Security       1.00      0.50      0.67         2
             Drug       0.87      0.81      0.84        16
            Fraud       0.78      1.00      0.88        14
         Gambling       0.90      0.90      0.90        10
           Murder       0.77      0.82      0.79        28
National Security       0.76      1.00      0.87        13
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.76      0.93      0.84        14
      State Crime       0.00      0.00      0.00         4
 Theft / Burglary       0.86      0.75      0.80         8
      Trafficking       1.00      0.20      0.33         5

         accuracy                           0.81       139
        macro avg       0.81      0.73      0.74       139
     weighted avg       0.80      0.81      0.79       139

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0 10  0  0  0  0  0  2  0  0  1  0  0  0]
 [ 0  0  3  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 13  1  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  0 14  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  9  0  0  0  0  0  0  0]
 [ 0  2  0  0  1  0  0 23  0  0  2  0  0  0]
 [ 0  0  0  0  0  0  0  0 13  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  1  3  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  0  6  0]
 [ 1  0  0  0  1  0  0  0  0  0  1  0  1  1]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       1.00      0.60      0.75        10
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.20      0.33         5
             Drug       0.95      0.90      0.92        20
            Fraud       0.80      0.91      0.85        22
         Gambling       1.00      1.00      1.00         4
           Murder       0.89      1.00      0.94        31
National Security       0.86      0.75      0.80        16
        Non-crime       1.00      1.00      1.00         2
     Sexual Abuse       0.80      1.00      0.89         8
      State Crime       0.20      0.33      0.25         3
 Theft / Burglary       1.00      1.00      1.00         9
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.87       139
        macro avg       0.89      0.84      0.84       139
     weighted avg       0.89      0.87      0.86       139

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  4  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 18  1  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  1 20  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 31  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 12  0  0  4  0  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.50      0.57         4
Battery / Assault       0.89      0.62      0.73        13
          Bribery       1.00      1.00      1.00         1
   Cyber Security       0.50      0.50      0.50         4
             Drug       0.84      0.88      0.86        24
            Fraud       0.95      0.91      0.93        22
         Gambling       1.00      1.00      1.00         6
           Murder       0.83      0.95      0.88        20
National Security       0.78      0.95      0.86        19
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.86      0.92      0.89        13
      State Crime       1.00      0.50      0.67         4
 Theft / Burglary       0.83      0.71      0.77         7
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.84       139
        macro avg       0.76      0.75      0.74       139
     weighted avg       0.84      0.84      0.83       139

```
### **Confustion matrix**
```
[[ 2  1  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  8  0  0  1  0  0  2  1  0  1  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  1  0  0  0  0  0]
 [ 1  0  0  0 21  0  0  0  0  0  0  0  1  1]
 [ 0  0  0  0  2 20  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 19  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      1.00      0.80         4
Battery / Assault       0.71      0.71      0.71         7
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.25      0.25      0.25         4
             Drug       0.81      0.93      0.87        14
            Fraud       0.81      0.81      0.81        21
         Gambling       1.00      1.00      1.00        10
           Murder       0.89      0.93      0.91        27
National Security       0.65      1.00      0.79        15
        Non-crime       0.00      0.00      0.00         3
     Sexual Abuse       0.89      0.73      0.80        11
      State Crime       0.00      0.00      0.00         5
 Theft / Burglary       0.89      0.80      0.84        10
      Trafficking       1.00      1.00      1.00         4

         accuracy                           0.81       139
        macro avg       0.68      0.69      0.67       139
     weighted avg       0.77      0.81      0.78       139

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 13  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  2  1 17  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0 10  0  0  0  0  0  0  0]
 [ 2  0  0  0  0  0  0 25  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 15  0  0  0  0  0]
 [ 0  1  0  0  1  0  0  0  1  0  0  0  0  0]
 [ 0  1  0  1  0  0  0  1  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.86      0.92         7
Battery / Assault       0.86      0.86      0.86         7
          Bribery       1.00      0.80      0.89         5
   Cyber Security       0.50      0.25      0.33         4
             Drug       0.95      0.87      0.91        23
            Fraud       0.83      1.00      0.90        19
         Gambling       1.00      0.86      0.92         7
           Murder       0.79      0.96      0.87        24
National Security       0.93      0.96      0.94        26
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       1.00      0.71      0.83         7
      State Crime       0.50      0.50      0.50         2
 Theft / Burglary       0.75      0.75      0.75         4
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.88       139
        macro avg       0.86      0.78      0.81       139
     weighted avg       0.88      0.88      0.87       139

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  4  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  1 20  0  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  0 19  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  6  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 23  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 25  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  1  0  0  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         6
Battery / Assault       0.62      0.56      0.59         9
          Bribery       0.75      0.75      0.75         4
   Cyber Security       1.00      0.33      0.50         6
             Drug       0.94      1.00      0.97        15
            Fraud       0.91      0.87      0.89        23
         Gambling       1.00      0.83      0.91         6
           Murder       0.77      1.00      0.87        23
National Security       0.80      0.95      0.87        21
        Non-crime       1.00      0.75      0.86         4
     Sexual Abuse       1.00      0.75      0.86        12
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       0.86      1.00      0.92         6
      Trafficking       0.00      0.00      0.00         0

         accuracy                           0.85       138
        macro avg       0.76      0.70      0.71       138
     weighted avg       0.85      0.85      0.83       138

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  3  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  3  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  0  0  0  0  0  0  0]
 [ 0  0  1  0  0 20  0  1  0  0  0  0  1  0]
 [ 0  1  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 23  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 20  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  3  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  0  9  0  0  1]
 [ 0  1  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.83      0.91         6
Battery / Assault       1.00      0.67      0.80         6
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.67      0.40      0.50         5
             Drug       0.88      0.94      0.91        16
            Fraud       0.85      0.96      0.90        23
         Gambling       1.00      1.00      1.00        11
           Murder       0.81      1.00      0.90        22
National Security       1.00      0.88      0.94        17
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      0.92      0.96        12
      State Crime       0.80      1.00      0.89         4
 Theft / Burglary       1.00      1.00      1.00         7
      Trafficking       0.80      0.80      0.80         5

         accuracy                           0.90       138
        macro avg       0.84      0.79      0.81       138
     weighted avg       0.90      0.90      0.89       138

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  1 22  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 11  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 22  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 15  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  0  0  0  1  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  4  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  4]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.50      0.57         4
Battery / Assault       0.80      0.80      0.80         5
          Bribery       0.75      0.43      0.55         7
   Cyber Security       0.40      1.00      0.57         2
             Drug       0.91      0.87      0.89        23
            Fraud       0.83      0.71      0.77        21
         Gambling       0.67      1.00      0.80         4
           Murder       0.81      0.95      0.88        22
National Security       0.83      1.00      0.91        15
     Sexual Abuse       0.93      0.93      0.93        14
      State Crime       1.00      0.25      0.40         4
 Theft / Burglary       1.00      0.91      0.95        11
      Trafficking       1.00      1.00      1.00         6

         accuracy                           0.84       138
        macro avg       0.82      0.80      0.77       138
     weighted avg       0.86      0.84      0.83       138

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  3  0  1  3  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 20  0  1  1  0  1  0  0  0]
 [ 0  0  0  3  1 15  1  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0 21  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 15  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  1  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  6]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.87      0.80      0.82      5.90
Battery / Assault:        0.82      0.67      0.73      8.70
Bribery:                  0.95      0.72      0.80      3.40
Cyber Security:           0.68      0.51      0.52      3.60
Drug:                     0.88      0.90      0.89     17.70
Fraud:                    0.85      0.90      0.87     20.70
Gambling:                 0.96      0.94      0.94      7.00
Murder:                   0.81      0.95      0.87     25.00
National Security:        0.85      0.94      0.89     18.20
Sexual Abuse:             0.91      0.87      0.88     10.90
State Crime:              0.53      0.42      0.44      3.50
Theft / Burglary:         0.91      0.86      0.88      8.90
Trafficking:              0.81      0.76      0.75      3.60
Non-crime:                0.50      0.42      0.45      1.60

Accuracy                                      0.85    138.70
Weighted avg:             0.82      0.77      0.77    138.70
Macro avg:                0.86      0.85      0.84    138.70
```
