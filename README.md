# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.62      1.00      0.77         5
Battery / Assault       1.00      0.86      0.92        14
          Bribery       1.00      1.00      1.00         3
   Cyber Security       1.00      0.40      0.57         5
             Drug       0.88      0.88      0.88        17
            Fraud       0.82      0.90      0.86        20
         Gambling       1.00      0.78      0.88         9
           Murder       0.93      1.00      0.96        26
National Security       0.90      0.95      0.93        20
     Sexual Abuse       0.94      0.94      0.94        16
      State Crime       0.50      0.50      0.50         2
 Theft / Burglary       0.91      0.83      0.87        12
      Trafficking       0.83      0.83      0.83         6

         accuracy                           0.89       155
        macro avg       0.87      0.84      0.84       155
     weighted avg       0.90      0.89      0.89       155

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0 12  0  0  0  0  0  1  1  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  3  0  0  0  0  0  0  0]
 [ 1  0  0  0 15  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  1 18  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  1  7  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 26  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 19  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0 15  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  1  0  0]
 [ 1  0  0  0  1  0  0  0  0  0  0 10  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      0.86      0.86         7
Battery / Assault       0.90      0.64      0.75        14
          Bribery       0.67      0.33      0.44         6
   Cyber Security       1.00      0.75      0.86         4
             Drug       0.88      0.88      0.88        16
            Fraud       0.82      0.95      0.88        19
         Gambling       0.78      0.88      0.82         8
           Murder       0.79      0.92      0.85        36
National Security       0.95      0.95      0.95        20
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.90      0.90      0.90        10
      State Crime       0.80      0.80      0.80         5
 Theft / Burglary       1.00      0.75      0.86         4
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.85       155
        macro avg       0.88      0.81      0.84       155
     weighted avg       0.86      0.85      0.85       155

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  9  0  0  1  0  0  4  0  0  0  0  0  0]
 [ 0  0  2  0  0  2  1  1  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 14  1  0  1  0  0  0  0  0  0]
 [ 0  0  1  0  0 18  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  7  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  0 33  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 19  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  4  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  3  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89        10
Battery / Assault       0.86      0.67      0.75         9
          Bribery       0.80      0.67      0.73         6
   Cyber Security       0.00      0.00      0.00         3
             Drug       0.90      0.90      0.90        20
            Fraud       0.83      0.95      0.89        21
         Gambling       0.88      1.00      0.93         7
           Murder       0.84      0.88      0.86        24
National Security       0.84      1.00      0.91        16
        Non-crime       0.50      0.50      0.50         2
     Sexual Abuse       0.86      0.86      0.86        14
      State Crime       1.00      0.50      0.67         4
 Theft / Burglary       1.00      0.94      0.97        17
      Trafficking       0.50      0.50      0.50         2

         accuracy                           0.85       155
        macro avg       0.77      0.73      0.74       155
     weighted avg       0.86      0.85      0.85       155

```
### **Confustion matrix**
```
[[ 8  0  0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  6  0  0  0  0  0  2  0  0  1  0  0  0]
 [ 0  0  4  0  1  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  1 18  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  1  0 20  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  1  0 21  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 16  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  1  0  0  0  1  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0 16  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.86      0.80         7
Battery / Assault       0.90      0.75      0.82        12
          Bribery       1.00      1.00      1.00         4
   Cyber Security       0.75      0.75      0.75         4
             Drug       0.90      0.95      0.93        20
            Fraud       0.82      0.82      0.82        22
         Gambling       1.00      0.90      0.95        10
           Murder       0.81      0.97      0.88        30
National Security       0.81      0.94      0.87        18
        Non-crime       0.00      0.00      0.00         4
     Sexual Abuse       1.00      0.89      0.94         9
      State Crime       0.50      0.33      0.40         3
 Theft / Burglary       0.83      0.62      0.71         8
      Trafficking       0.75      0.75      0.75         4

         accuracy                           0.85       155
        macro avg       0.77      0.75      0.76       155
     weighted avg       0.83      0.85      0.83       155

```
### **Confustion matrix**
```
[[ 6  1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  4  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  1  0  0  0  0  0]
 [ 1  0  0  0 19  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  1 18  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  0  1  9  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0 29  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 17  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  1  1  0  0  0  0  1]
 [ 0  0  0  0  0  0  0  1  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  2  0  1  0  0  0  0  5  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  3]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      1.00      0.92         6
Battery / Assault       0.64      0.88      0.74         8
          Bribery       1.00      0.33      0.50         3
   Cyber Security       0.50      1.00      0.67         2
             Drug       1.00      0.93      0.96        29
            Fraud       0.88      0.95      0.91        22
         Gambling       1.00      0.91      0.95        11
           Murder       0.87      0.80      0.83        25
National Security       0.86      0.95      0.90        19
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.91      0.83      0.87        12
      State Crime       1.00      0.50      0.67         4
 Theft / Burglary       0.89      1.00      0.94         8
      Trafficking       1.00      1.00      1.00         4

         accuracy                           0.88       155
        macro avg       0.89      0.83      0.82       155
     weighted avg       0.90      0.88      0.88       155

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  1  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 27  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  1  0 21  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1 10  0  0  0  0  0  0  0]
 [ 1  2  0  0  0  0  0 20  0  0  1  0  1  0]
 [ 0  0  0  1  0  0  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  1  0  0  0  0]
 [ 0  2  0  0  0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       0.73      0.89      0.80         9
          Bribery       1.00      0.50      0.67         4
   Cyber Security       1.00      0.25      0.40         4
             Drug       0.95      0.78      0.86        23
            Fraud       0.76      0.95      0.84        20
         Gambling       1.00      1.00      1.00        10
           Murder       0.81      0.93      0.87        28
National Security       0.82      1.00      0.90        18
        Non-crime       1.00      0.17      0.29         6
     Sexual Abuse       0.55      1.00      0.71         6
      State Crime       1.00      0.40      0.57         5
 Theft / Burglary       0.88      0.78      0.82         9
      Trafficking       1.00      0.88      0.93         8

         accuracy                           0.83       155
        macro avg       0.89      0.74      0.75       155
     weighted avg       0.87      0.83      0.82       155

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  8  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  2  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 18  1  0  2  0  0  2  0  0  0]
 [ 0  0  0  0  0 19  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0 10  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 26  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  2  2  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  6  0  0  0]
 [ 0  2  0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  1  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  7]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      1.00      0.89         4
Battery / Assault       0.62      0.45      0.53        11
          Bribery       1.00      0.33      0.50         3
   Cyber Security       0.33      0.25      0.29         4
             Drug       0.81      0.91      0.86        23
            Fraud       0.77      0.77      0.77        22
         Gambling       1.00      0.83      0.91         6
           Murder       0.68      0.90      0.78        21
National Security       0.81      0.81      0.81        21
        Non-crime       1.00      0.60      0.75         5
     Sexual Abuse       0.90      0.75      0.82        12
      State Crime       0.60      0.50      0.55         6
 Theft / Burglary       1.00      1.00      1.00        12
      Trafficking       0.83      1.00      0.91         5

         accuracy                           0.79       155
        macro avg       0.80      0.72      0.74       155
     weighted avg       0.79      0.79      0.78       155

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 1  5  0  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  0  1  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 21  0  0  1  0  0  1  0  0  0]
 [ 0  0  0  1  3 17  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  5  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  0 19  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  1 17  0  0  2  0  0]
 [ 0  1  0  0  0  0  0  0  1  3  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  0  9  0  0  1]
 [ 0  0  0  0  0  0  0  0  3  0  0  3  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0 12  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.88      0.93         8
Battery / Assault       0.86      0.75      0.80         8
          Bribery       0.67      1.00      0.80         2
   Cyber Security       1.00      0.60      0.75         5
             Drug       0.89      0.94      0.91        17
            Fraud       0.86      0.95      0.90        19
         Gambling       1.00      1.00      1.00         7
           Murder       0.95      1.00      0.97        37
National Security       0.81      0.91      0.86        23
     Sexual Abuse       0.89      0.80      0.84        10
      State Crime       0.60      0.43      0.50         7
 Theft / Burglary       1.00      1.00      1.00         7
      Trafficking       1.00      0.60      0.75         5

         accuracy                           0.89       155
        macro avg       0.89      0.84      0.85       155
     weighted avg       0.89      0.89      0.89       155

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  1  0  0  1  0  0  0  0]
 [ 0  0  0  0 16  1  0  0  0  0  0  0  0]
 [ 0  0  1  0  0 18  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 37  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0 21  0  1  0  0]
 [ 0  1  0  0  0  1  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  3  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  3]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.90      0.95        10
Battery / Assault       0.89      0.53      0.67        15
          Bribery       0.50      0.33      0.40         3
   Cyber Security       0.75      1.00      0.86         3
             Drug       0.77      0.89      0.83        19
            Fraud       0.90      0.82      0.86        22
         Gambling       1.00      0.93      0.97        15
           Murder       0.64      0.89      0.74        18
National Security       0.80      0.94      0.86        17
     Sexual Abuse       0.93      1.00      0.96        13
      State Crime       1.00      0.33      0.50         6
 Theft / Burglary       0.89      0.89      0.89         9
      Trafficking       1.00      1.00      1.00         5

         accuracy                           0.84       155
        macro avg       0.85      0.81      0.81       155
     weighted avg       0.86      0.84      0.83       155

```
### **Confustion matrix**
```
[[ 9  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  8  0  0  0  0  0  6  0  1  0  0  0]
 [ 0  0  1  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  0  0  1  0  0  0  1  0]
 [ 0  0  1  1  2 18  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0 14  0  0  0  0  0  0]
 [ 0  0  0  0  2  0  0 16  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 16  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  2  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.83      0.91         6
Battery / Assault       0.71      0.50      0.59        10
          Bribery       0.86      0.75      0.80         8
   Cyber Security       0.50      0.40      0.44         5
             Drug       0.86      0.80      0.83        15
            Fraud       0.96      0.92      0.94        26
         Gambling       0.92      0.92      0.92        12
           Murder       0.88      0.92      0.90        24
National Security       0.72      0.90      0.80        20
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.89      0.89      0.89         9
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       0.86      0.92      0.89        13
      Trafficking       0.75      1.00      0.86         3

         accuracy                           0.83       155
        macro avg       0.78      0.77      0.77       155
     weighted avg       0.83      0.83      0.83       155

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  1  0]
 [ 0  5  0  0  0  0  0  1  2  0  1  1  0  0]
 [ 0  0  6  0  1  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  2  0  1  0  0  2  0  0  0  0  0]
 [ 0  1  0  0 12  0  0  1  0  0  0  0  1  0]
 [ 0  0  0  1  0 24  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0 11  0  0  0  0  0  0  0]
 [ 0  1  1  0  0  0  0 22  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0 12  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.89      0.89      0.88      6.80
Battery / Assault:        0.81      0.69      0.74     11.00
Bribery:                  0.85      0.62      0.68      4.20
Cyber Security:           0.68      0.54      0.56      3.90
Drug:                     0.88      0.89      0.88     19.90
Fraud:                    0.84      0.90      0.87     21.30
Gambling:                 0.96      0.91      0.93      9.50
Murder:                   0.82      0.92      0.86     26.90
National Security:        0.83      0.94      0.88     19.20
Sexual Abuse:             0.88      0.89      0.87     11.10
State Crime:              0.70      0.43      0.52      4.50
Theft / Burglary:         0.93      0.87      0.90      9.90
Trafficking:              0.87      0.84      0.84      4.70
Non-crime:                0.55      0.38      0.42      2.10

Accuracy                                      0.85    155.00
Weighted avg:             0.84      0.78      0.79    155.00
Macro avg:                0.86      0.85      0.84    155.00
```
