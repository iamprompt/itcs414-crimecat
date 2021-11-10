# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      1.00      0.89         4
Battery / Assault       1.00      0.44      0.62         9
          Bribery       1.00      0.75      0.86         4
   Cyber Security       0.00      0.00      0.00         3
             Drug       0.85      0.85      0.85        13
            Fraud       0.75      0.75      0.75        12
         Gambling       0.88      1.00      0.93         7
           Murder       0.71      1.00      0.83        15
National Security       0.50      1.00      0.67         3
        Non-crime       0.67      0.67      0.67         3
     Sexual Abuse       0.88      0.78      0.82         9
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       0.86      0.86      0.86         7
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.78        96
        macro avg       0.71      0.71      0.69        96
     weighted avg       0.79      0.78      0.76        96

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  2  0  1  1  1  0  0]
 [ 0  0  3  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 11  0  0  1  0  0  0  0  1  0]
 [ 0  0  0  1  1  9  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 15  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  2  0  0  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  6  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         6
Battery / Assault       0.75      0.60      0.67         5
          Bribery       0.00      0.00      0.00         1
   Cyber Security       0.75      0.60      0.67         5
             Drug       0.88      0.94      0.91        16
            Fraud       0.60      0.86      0.71         7
         Gambling       1.00      1.00      1.00         8
           Murder       0.76      0.93      0.84        14
National Security       0.88      0.88      0.88         8
        Non-crime       1.00      0.40      0.57         5
     Sexual Abuse       1.00      0.80      0.89        15
      State Crime       0.00      0.00      0.00         0
 Theft / Burglary       1.00      0.67      0.80         3
      Trafficking       0.60      1.00      0.75         3

         accuracy                           0.83        96
        macro avg       0.73      0.69      0.69        96
     weighted avg       0.86      0.83      0.83        96

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0  6  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 13  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  7  0  0  1  0  0]
 [ 0  0  0  0  1  1  0  0  0  2  0  0  0  1]
 [ 0  1  0  0  0  0  0  1  0  0 12  0  0  1]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  2  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       1.00      0.25      0.40         8
          Bribery       1.00      1.00      1.00         4
   Cyber Security       0.50      0.67      0.57         3
             Drug       0.95      1.00      0.97        18
            Fraud       0.94      0.94      0.94        17
         Gambling       1.00      1.00      1.00         3
           Murder       0.76      1.00      0.86        16
National Security       0.62      1.00      0.77         5
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       1.00      0.88      0.93         8
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.75      0.86         4
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.87        95
        macro avg       0.84      0.80      0.80        95
     weighted avg       0.89      0.87      0.86        95

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  4  2  0  0  0  0  0]
 [ 0  0  4  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 18  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0 16  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 16  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  3  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  3]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.83      0.91         6
Battery / Assault       1.00      0.60      0.75         5
          Bribery       1.00      1.00      1.00         2
   Cyber Security       1.00      0.33      0.50         3
             Drug       0.94      0.94      0.94        16
            Fraud       0.89      0.89      0.89        19
         Gambling       1.00      1.00      1.00         4
           Murder       0.84      1.00      0.91        16
National Security       0.40      1.00      0.57         2
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       1.00      1.00      1.00        12
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       0.83      1.00      0.91         5
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.89        95
        macro avg       0.85      0.83      0.81        95
     weighted avg       0.90      0.89      0.88        95

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  1  1  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  1 17  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 16  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      0.67      0.67         6
Battery / Assault       0.67      0.50      0.57        12
          Bribery       1.00      1.00      1.00         3
   Cyber Security       1.00      1.00      1.00         2
             Drug       1.00      0.93      0.97        15
            Fraud       0.92      0.85      0.88        13
         Gambling       1.00      1.00      1.00         4
           Murder       0.61      0.88      0.72        16
National Security       1.00      1.00      1.00         4
     Sexual Abuse       0.86      0.67      0.75         9
 Theft / Burglary       0.89      0.89      0.89         9
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.82        95
        macro avg       0.88      0.86      0.87        95
     weighted avg       0.84      0.82      0.82        95

```
### **Confustion matrix**
```
[[ 4  1  0  0  0  0  0  1  0  0  0  0]
 [ 0  6  0  0  0  0  0  6  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  0  1  0]
 [ 0  0  0  0  0 11  0  1  0  1  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0]
 [ 1  1  0  0  0  0  0 14  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0]
 [ 0  1  0  0  0  1  0  1  0  6  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         3
Battery / Assault       1.00      0.43      0.60         7
          Bribery       0.50      0.50      0.50         2
   Cyber Security       0.00      0.00      0.00         1
             Drug       0.89      0.89      0.89        19
            Fraud       0.75      1.00      0.86         9
         Gambling       1.00      0.75      0.86         4
           Murder       0.85      0.92      0.88        24
National Security       0.50      0.50      0.50         4
     Sexual Abuse       0.73      0.89      0.80         9
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       1.00      1.00      1.00         6
      Trafficking       1.00      1.00      1.00         5

         accuracy                           0.83        95
        macro avg       0.71      0.68      0.68        95
     weighted avg       0.83      0.83      0.82        95

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  2  0  2  0  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  1  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  3  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0 22  0  1  0  0  0]
 [ 0  0  0  1  0  0  0  1  2  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.88      1.00      0.93         7
Battery / Assault       1.00      1.00      1.00         6
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.50      1.00      0.67         2
             Drug       0.91      0.67      0.77        15
            Fraud       0.89      0.73      0.80        11
         Gambling       0.86      1.00      0.92         6
           Murder       0.86      1.00      0.92        18
National Security       1.00      0.90      0.95        10
        Non-crime       0.00      0.00      0.00         2
     Sexual Abuse       0.82      1.00      0.90         9
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       1.00      1.00      1.00         3
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.88        95
        macro avg       0.84      0.88      0.85        95
     weighted avg       0.88      0.88      0.87        95

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 1  0  0  0 10  0  1  2  0  0  1  0  0  0]
 [ 0  0  0  1  1  8  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 18  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  9  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      1.00      0.91         5
Battery / Assault       0.50      0.43      0.46         7
          Bribery       1.00      0.25      0.40         4
             Drug       0.86      0.75      0.80        16
            Fraud       0.86      1.00      0.92        12
         Gambling       1.00      1.00      1.00         3
           Murder       0.80      0.87      0.83        23
National Security       0.83      1.00      0.91         5
     Sexual Abuse       0.73      0.92      0.81        12
      State Crime       1.00      0.33      0.50         3
 Theft / Burglary       1.00      0.67      0.80         3
      Trafficking       1.00      1.00      1.00         2

         accuracy                           0.81        95
        macro avg       0.87      0.77      0.78        95
     weighted avg       0.82      0.81      0.80        95

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  3  0  1  0  0  0]
 [ 0  0  1  2  1  0  0  0  0  0  0  0]
 [ 0  0  0 12  1  0  0  0  3  0  0  0]
 [ 0  0  0  0 12  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  3  0  0  0  0  0  0]
 [ 1  2  0  0  0  0 20  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  5  0  0  0  0]
 [ 0  0  0  0  0  0  1  0 11  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  1  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  2  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      0.50      0.60         6
Battery / Assault       0.33      0.33      0.33         3
          Bribery       1.00      0.33      0.50         3
   Cyber Security       0.75      0.60      0.67         5
             Drug       0.72      0.87      0.79        15
            Fraud       0.73      0.85      0.79        13
         Gambling       0.67      1.00      0.80         2
           Murder       0.87      0.91      0.89        22
National Security       0.86      0.75      0.80         8
        Non-crime       1.00      0.50      0.67         2
     Sexual Abuse       0.75      0.86      0.80         7
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.86      0.92         7
      Trafficking       0.50      1.00      0.67         1

         accuracy                           0.78        95
        macro avg       0.71      0.67      0.66        95
     weighted avg       0.79      0.78      0.77        95

```
### **Confustion matrix**
```
[[ 3  0  0  0  1  0  0  1  0  0  1  0  0  0]
 [ 0  1  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  1  0  1  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  3  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 13  1  0  0  0  0  0  0  0  1]
 [ 0  0  0  1  1 11  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 20  0  0  1  0  0  0]
 [ 0  1  0  0  1  0  0  0  6  0  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  1  0  0  0  6  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.50      0.67         4
Battery / Assault       0.50      0.29      0.36         7
          Bribery       1.00      1.00      1.00         1
   Cyber Security       1.00      1.00      1.00         3
             Drug       0.80      0.86      0.83        14
            Fraud       0.83      0.91      0.87        11
         Gambling       1.00      0.71      0.83         7
           Murder       0.70      1.00      0.83        19
National Security       0.67      1.00      0.80         2
     Sexual Abuse       0.90      0.90      0.90        10
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       0.92      0.85      0.88        13
      Trafficking       1.00      0.33      0.50         3

         accuracy                           0.81        95
        macro avg       0.79      0.72      0.73        95
     weighted avg       0.82      0.81      0.79        95

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 12  1  0  1  0  0  0  0  0]
 [ 0  0  0  0  1 10  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  5  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 19  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  0 11  0]
 [ 0  0  0  0  1  0  0  0  0  1  0  0  1]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.89      0.85      0.86      5.00
Battery / Assault:        0.78      0.49      0.58      6.90
Bribery:                  0.85      0.68      0.73      2.60
Cyber Security:           0.55      0.52      0.51      2.70
Drug:                     0.88      0.87      0.87     15.70
Fraud:                    0.82      0.88      0.84     12.40
Gambling:                 0.94      0.95      0.93      4.80
Murder:                   0.78      0.95      0.85     18.30
National Security:        0.73      0.90      0.78      5.10
Sexual Abuse:             0.87      0.87      0.86     10.00
State Crime:              0.20      0.13      0.15      1.30
Theft / Burglary:         0.95      0.85      0.89      6.00
Trafficking:              0.91      0.89      0.87      3.00
Non-crime:                0.47      0.36      0.39      1.40

Accuracy                                      0.83     95.20
Weighted avg:             0.79      0.76      0.76     95.20
Macro avg:                0.84      0.83      0.82     95.20
```
