# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         6
Battery / Assault       1.00      0.90      0.95        10
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.50      1.00      0.67         1
             Drug       0.93      0.93      0.93        14
            Fraud       0.83      0.83      0.83        12
         Gambling       1.00      1.00      1.00         1
           Murder       0.96      0.96      0.96        27
National Security       0.73      0.89      0.80         9
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       1.00      0.94      0.97        16
      State Crime       0.50      0.50      0.50         2
 Theft / Burglary       0.86      1.00      0.92         6
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.91       110
        macro avg       0.88      0.89      0.87       110
     weighted avg       0.92      0.91      0.91       110

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  2  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 13  0  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  1 10  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 26  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  8  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0 15  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.89      0.94         9
Battery / Assault       0.50      0.17      0.25         6
          Bribery       0.75      1.00      0.86         3
   Cyber Security       0.80      0.67      0.73         6
             Drug       0.77      0.89      0.83        19
            Fraud       0.73      0.89      0.80         9
         Gambling       1.00      1.00      1.00         4
           Murder       0.64      0.78      0.70        18
National Security       0.82      1.00      0.90         9
     Sexual Abuse       1.00      0.75      0.86        12
      State Crime       1.00      0.50      0.67         2
 Theft / Burglary       0.88      0.78      0.82         9
      Trafficking       0.50      0.33      0.40         3

         accuracy                           0.79       109
        macro avg       0.80      0.74      0.75       109
     weighted avg       0.79      0.79      0.78       109

```
### **Confustion matrix**
```
[[ 8  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  4  0  1  0  0  1  0  0  0  0]
 [ 0  0  0  1 17  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  8  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  1  0  2  1  0 14  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  9  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  9  0  0  1]
 [ 0  0  0  0  0  0  0  0  1  0  1  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  7  0]
 [ 0  0  0  0  2  0  0  0  0  0  0  0  1]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      0.71      0.77         7
Battery / Assault       0.67      0.33      0.44         6
   Cyber Security       1.00      0.67      0.80         3
             Drug       0.93      0.87      0.90        15
            Fraud       0.93      0.93      0.93        14
         Gambling       0.75      1.00      0.86         3
           Murder       0.79      1.00      0.88        19
National Security       0.88      0.93      0.90        15
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.82      0.75      0.78        12
      State Crime       1.00      0.33      0.50         3
 Theft / Burglary       0.73      0.89      0.80         9
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.84       109
        macro avg       0.87      0.80      0.81       109
     weighted avg       0.85      0.84      0.83       109

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  2  0  0  1  0  1  0]
 [ 0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0 13  0  0  0  0  0  1  0  1  0]
 [ 0  0  0  0 13  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 19  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 14  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 1  0  0  0  0  1  1  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.83      0.91         6
Battery / Assault       1.00      0.54      0.70        13
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.94      0.94      0.94        18
            Fraud       0.80      0.89      0.84         9
         Gambling       1.00      1.00      1.00         6
           Murder       0.81      1.00      0.90        22
National Security       0.92      0.92      0.92        13
     Sexual Abuse       0.78      1.00      0.88         7
      State Crime       1.00      1.00      1.00         3
 Theft / Burglary       1.00      1.00      1.00         6
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.89       109
        macro avg       0.87      0.82      0.83       109
     weighted avg       0.90      0.89      0.88       109

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  4  1  1  0  0  0]
 [ 0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  8  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 22  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 12  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  3  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.33      0.50      0.40         2
Battery / Assault       0.67      0.80      0.73         5
          Bribery       1.00      1.00      1.00         4
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.89      1.00      0.94        16
            Fraud       0.93      0.93      0.93        15
         Gambling       1.00      1.00      1.00         6
           Murder       0.94      0.83      0.88        18
National Security       0.88      1.00      0.94        22
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.71      1.00      0.83         5
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       1.00      0.83      0.91         6
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.88       109
        macro avg       0.74      0.74      0.73       109
     weighted avg       0.85      0.88      0.86       109

```
### **Confustion matrix**
```
[[ 1  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  4  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1 14  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 1  1  0  0  0  0  0 15  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 22  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  5  0  0  0]
 [ 0  1  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.75      0.75         4
Battery / Assault       0.80      0.57      0.67         7
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.25      0.40         4
             Drug       0.93      0.76      0.84        17
            Fraud       0.87      0.81      0.84        16
         Gambling       0.89      0.89      0.89         9
           Murder       0.76      0.95      0.84        20
National Security       0.85      1.00      0.92        11
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.64      0.88      0.74         8
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.86      0.86      0.86         7
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.82       109
        macro avg       0.77      0.73      0.72       109
     weighted avg       0.83      0.82      0.81       109

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  4  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  1  0  0  0  0  0]
 [ 1  0  0  0 13  0  0  1  0  0  1  0  0  1]
 [ 0  0  0  0  1 13  1  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 19  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 11  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  1  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      1.00      0.80         4
Battery / Assault       1.00      0.25      0.40         4
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.60      0.50      0.55         6
             Drug       0.93      0.76      0.84        17
            Fraud       0.73      0.85      0.79        13
         Gambling       1.00      1.00      1.00         2
           Murder       0.78      0.95      0.86        22
National Security       0.88      0.93      0.90        15
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.88      0.88      0.88         8
      State Crime       0.50      1.00      0.67         1
 Theft / Burglary       1.00      0.91      0.95        11
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.83       109
        macro avg       0.78      0.75      0.74       109
     weighted avg       0.83      0.83      0.81       109

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  3  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 13  2  0  1  0  0  1  0  0  0]
 [ 0  0  0  2  0 11  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0 21  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 14  0  0  1  0  0]
 [ 1  0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.86      0.92         7
Battery / Assault       0.33      0.17      0.22         6
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.80      0.92      0.86        13
            Fraud       0.87      0.81      0.84        16
         Gambling       1.00      0.80      0.89         5
           Murder       0.71      0.94      0.81        16
National Security       0.94      0.84      0.89        19
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.73      0.89      0.80         9
      State Crime       0.33      1.00      0.50         1
 Theft / Burglary       1.00      1.00      1.00         3
      Trafficking       1.00      0.88      0.93         8

         accuracy                           0.81       109
        macro avg       0.77      0.72      0.71       109
     weighted avg       0.82      0.81      0.80       109

```
### **Confustion matrix**
```
[[ 6  0  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  4  0  0  1  0  0  0]
 [ 0  0  1  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 12  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  1  2 13  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 15  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 16  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  1  0  1  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  7]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         3
Battery / Assault       0.50      0.29      0.36         7
   Cyber Security       0.67      0.50      0.57         4
             Drug       0.89      1.00      0.94        17
            Fraud       0.89      0.89      0.89        18
         Gambling       1.00      1.00      1.00         8
           Murder       0.71      0.94      0.81        16
National Security       0.85      1.00      0.92        11
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       1.00      0.82      0.90        11
      State Crime       1.00      0.33      0.50         3
 Theft / Burglary       1.00      1.00      1.00         4
      Trafficking       0.80      1.00      0.89         4

         accuracy                           0.85       109
        macro avg       0.87      0.78      0.80       109
     weighted avg       0.86      0.85      0.84       109

```
### **Confustion matrix**
```
[[ 2  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  0  2  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0 17  0  0  0  0  0  0  0  0  0]
 [ 0  0  1  1 16  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  8  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0 15  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 11  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  1]
 [ 0  1  0  0  0  0  1  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      1.00      0.80         2
Battery / Assault       1.00      1.00      1.00         7
          Bribery       1.00      0.57      0.73         7
   Cyber Security       0.75      0.75      0.75         4
             Drug       0.90      0.86      0.88        22
            Fraud       0.67      0.80      0.73        10
         Gambling       1.00      1.00      1.00         4
           Murder       0.79      1.00      0.88        19
National Security       0.90      1.00      0.95         9
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.92      0.92      0.92        13
      State Crime       1.00      0.50      0.67         2
 Theft / Burglary       1.00      0.80      0.89         5
      Trafficking       1.00      0.50      0.67         4

         accuracy                           0.86       109
        macro avg       0.83      0.76      0.78       109
     weighted avg       0.87      0.86      0.85       109

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  4  0  2  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 19  0  0  3  0  0  0  0  0  0]
 [ 0  0  0  1  0  8  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 19  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  9  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  4  0]
 [ 1  0  0  0  0  0  0  0  0  0  1  0  0  2]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.82      0.82      0.81      5.00
Battery / Assault:        0.75      0.50      0.57      7.10
Bribery:                  0.78      0.56      0.63      2.60
Cyber Security:           0.53      0.43      0.45      3.30
Drug:                     0.89      0.90      0.89     16.80
Fraud:                    0.82      0.86      0.84     13.20
Gambling:                 0.96      0.97      0.96      4.80
Murder:                   0.79      0.94      0.85     19.70
National Security:        0.86      0.95      0.90     13.30
Sexual Abuse:             0.85      0.88      0.86     10.10
State Crime:              0.63      0.52      0.50      2.10
Theft / Burglary:         0.93      0.91      0.92      6.60
Trafficking:              0.88      0.87      0.86      3.10
Non-crime:                0.60      0.42      0.48      1.40

Accuracy                                      0.85    109.10
Weighted avg:             0.82      0.77      0.77    109.10
Macro avg:                0.85      0.85      0.84    109.10
```
