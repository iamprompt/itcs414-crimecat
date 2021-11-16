# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      1.00      0.91         5
Battery / Assault       0.62      0.56      0.59         9
          Bribery       1.00      0.50      0.67         2
   Cyber Security       0.67      1.00      0.80         2
             Drug       0.89      1.00      0.94        17
            Fraud       0.91      0.87      0.89        23
         Gambling       1.00      0.83      0.91         6
           Murder       0.87      0.90      0.89        30
National Security       0.86      1.00      0.93        19
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.90      0.90      0.90        10
      State Crime       0.50      0.33      0.40         3
 Theft / Burglary       1.00      0.89      0.94         9
      Trafficking       1.00      1.00      1.00         4

         accuracy                           0.87       142
        macro avg       0.86      0.79      0.80       142
     weighted avg       0.88      0.87      0.87       142

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  2  0  0  1  1  0  0]
 [ 0  0  1  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 17  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  2 20  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 1  2  0  0  0  0  0 27  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 19  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  1  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.86      0.92         7
Battery / Assault       0.85      0.85      0.85        13
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.00      0.00      0.00         4
             Drug       0.93      1.00      0.96        13
            Fraud       0.97      0.97      0.97        32
         Gambling       1.00      1.00      1.00         3
           Murder       0.88      0.88      0.88        16
National Security       0.73      0.86      0.79        22
     Sexual Abuse       0.92      1.00      0.96        11
      State Crime       0.40      0.33      0.36         6
 Theft / Burglary       1.00      0.90      0.95        10
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.87       142
        macro avg       0.82      0.82      0.82       142
     weighted avg       0.86      0.87      0.86       142

```
### **Confustion matrix**
```
[[ 6  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0 11  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  3  0  0  0  0]
 [ 0  0  0  0 13  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0 31  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 14  0  1  0  0  0]
 [ 0  1  0  0  0  0  0  0 19  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  2  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.90      0.90      0.90        10
Battery / Assault       1.00      0.56      0.72        16
          Bribery       1.00      0.67      0.80         3
             Drug       0.87      0.81      0.84        16
            Fraud       0.77      1.00      0.87        10
         Gambling       1.00      0.88      0.93         8
           Murder       0.77      1.00      0.87        24
National Security       0.84      0.94      0.89        17
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.79      1.00      0.88        11
      State Crime       0.75      0.60      0.67         5
 Theft / Burglary       0.86      0.86      0.86        14
      Trafficking       1.00      0.43      0.60         7

         accuracy                           0.85       142
        macro avg       0.89      0.82      0.83       142
     weighted avg       0.87      0.85      0.84       142

```
### **Confustion matrix**
```
[[ 9  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  9  0  1  0  0  4  1  0  1  0  0  0]
 [ 0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0 13  1  0  1  0  0  0  0  1  0]
 [ 0  0  0  0 10  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  7  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0 24  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 16  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  3  0  0]
 [ 0  0  0  0  1  0  1  0  0  0  0 12  0]
 [ 1  0  0  1  0  0  0  0  0  2  0  0  3]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       0.90      0.69      0.78        13
          Bribery       1.00      1.00      1.00         2
   Cyber Security       0.67      0.33      0.44         6
             Drug       0.83      0.83      0.83        12
            Fraud       0.74      0.82      0.78        17
         Gambling       1.00      1.00      1.00         4
           Murder       0.85      0.97      0.90        34
National Security       0.64      0.93      0.76        15
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.83      0.91      0.87        11
      State Crime       1.00      0.29      0.44         7
 Theft / Burglary       1.00      0.92      0.96        13
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.82       142
        macro avg       0.82      0.72      0.73       142
     weighted avg       0.84      0.82      0.81       142

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  3  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 10  1  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  1 14  0  0  1  0  1  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 33  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 14  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  1  1  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0 12  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  0]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         2
Battery / Assault       1.00      0.80      0.89        10
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.67      0.67      0.67         3
             Drug       0.92      0.92      0.92        24
            Fraud       0.89      0.89      0.89        28
         Gambling       1.00      1.00      1.00         5
           Murder       0.82      0.88      0.85        26
National Security       1.00      0.94      0.97        18
        Non-crime       0.50      1.00      0.67         1
     Sexual Abuse       0.82      0.90      0.86        10
      State Crime       1.00      1.00      1.00         2
 Theft / Burglary       0.67      0.75      0.71         8
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.87       142
        macro avg       0.81      0.80      0.79       142
     weighted avg       0.88      0.87      0.87       142

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  8  0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  0  2  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 22  0  0  1  0  0  0  0  0  1]
 [ 0  0  0  0  1 25  0  0  0  0  0  0  2  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 23  0  1  1  0  0  0]
 [ 0  0  0  1  0  0  0  0 17  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1  0]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.60      1.00      0.75         3
Battery / Assault       0.57      0.57      0.57         7
          Bribery       0.80      0.67      0.73         6
   Cyber Security       0.33      0.17      0.22         6
             Drug       0.87      0.81      0.84        16
            Fraud       0.74      0.89      0.81        19
         Gambling       1.00      1.00      1.00        10
           Murder       0.86      0.96      0.91        25
National Security       0.72      0.95      0.82        19
        Non-crime       0.00      0.00      0.00         3
     Sexual Abuse       0.88      0.70      0.78        10
      State Crime       1.00      0.25      0.40         4
 Theft / Burglary       1.00      0.80      0.89        10
      Trafficking       1.00      1.00      1.00         4

         accuracy                           0.80       142
        macro avg       0.74      0.70      0.69       142
     weighted avg       0.79      0.80      0.78       142

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  4  0  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  1  0  3  0  0  2  0  0  0  0  0]
 [ 1  1  0  0 13  0  0  0  0  0  1  0  0  0]
 [ 0  0  1  1  0 17  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 10  0  0  0  0  0  0  0]
 [ 1  0  0  0  0  0  0 24  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0  2  0  0  0  0  0]
 [ 0  2  0  1  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  1  2  0  0  1  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         9
Battery / Assault       0.75      0.50      0.60         6
          Bribery       1.00      0.80      0.89         5
   Cyber Security       0.67      0.40      0.50         5
             Drug       0.90      0.78      0.84        23
            Fraud       0.83      1.00      0.90        19
         Gambling       0.92      0.92      0.92        12
           Murder       0.75      0.96      0.84        25
National Security       0.86      0.90      0.88        20
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      0.71      0.83         7
      State Crime       0.50      0.50      0.50         4
 Theft / Burglary       0.75      1.00      0.86         3
      Trafficking       0.75      1.00      0.86         3

         accuracy                           0.83       142
        macro avg       0.76      0.72      0.73       142
     weighted avg       0.84      0.83      0.82       142

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  4  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  2  0  0  1  0  0  0  0  0]
 [ 0  1  0  1 18  0  0  1  0  0  0  0  1  1]
 [ 0  0  0  0  0 19  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1 11  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 24  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  1  0  0  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  3  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.88      0.93         8
Battery / Assault       0.75      0.90      0.82        10
          Bribery       0.50      0.25      0.33         4
   Cyber Security       1.00      0.67      0.80         3
             Drug       0.93      0.81      0.87        16
            Fraud       0.82      0.86      0.84        21
         Gambling       1.00      1.00      1.00         8
           Murder       0.79      0.96      0.87        27
National Security       0.88      0.94      0.91        16
        Non-crime       1.00      0.80      0.89         5
     Sexual Abuse       1.00      0.75      0.86        12
      State Crime       1.00      0.25      0.40         4
 Theft / Burglary       0.86      1.00      0.92         6
      Trafficking       0.33      1.00      0.50         1

         accuracy                           0.85       141
        macro avg       0.85      0.79      0.78       141
     weighted avg       0.87      0.85      0.84       141

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  1  0  1  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 13  1  0  2  0  0  0  0  0  0]
 [ 0  0  1  0  0 18  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 26  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 15  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  4  0  0  0  1]
 [ 0  1  0  0  0  0  0  1  0  0  9  0  0  1]
 [ 0  1  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.88      0.93         8
Battery / Assault       1.00      0.71      0.83         7
          Bribery       1.00      1.00      1.00         3
   Cyber Security       0.60      0.60      0.60         5
             Drug       0.88      0.94      0.91        16
            Fraud       0.90      0.90      0.90        20
         Gambling       1.00      1.00      1.00         9
           Murder       0.80      1.00      0.89        20
National Security       0.95      0.90      0.93        21
     Sexual Abuse       1.00      0.92      0.96        12
      State Crime       0.80      0.80      0.80         5
 Theft / Burglary       1.00      1.00      1.00         9
      Trafficking       1.00      0.83      0.91         6

         accuracy                           0.91       141
        macro avg       0.92      0.88      0.90       141
     weighted avg       0.92      0.91      0.91       141

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  1  0  0  0  0  0]
 [ 0  0  0  1  1 18  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  9  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 20  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 19  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0 11  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  4  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  5]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.50      0.33      0.40         3
Battery / Assault       0.83      0.83      0.83         6
          Bribery       0.80      0.57      0.67         7
   Cyber Security       0.33      0.50      0.40         2
             Drug       0.92      0.92      0.92        24
            Fraud       0.88      0.75      0.81        20
         Gambling       0.86      1.00      0.92         6
           Murder       0.81      0.96      0.88        23
National Security       0.88      0.94      0.91        16
     Sexual Abuse       0.93      0.93      0.93        15
      State Crime       0.50      0.50      0.50         2
 Theft / Burglary       1.00      0.91      0.95        11
      Trafficking       1.00      1.00      1.00         6

         accuracy                           0.87       141
        macro avg       0.79      0.78      0.78       141
     weighted avg       0.87      0.87      0.86       141

```
### **Confustion matrix**
```
[[ 1  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  4  0  1  2  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0 22  0  0  1  0  1  0  0  0]
 [ 0  0  0  2  1 15  1  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0 22  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 15  0  1  0  0]
 [ 0  1  0  0  0  0  0  0  0 14  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  1  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  6]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.88      0.85      0.85      5.90
Battery / Assault:        0.83      0.70      0.75      9.70
Bribery:                  0.91      0.70      0.77      3.80
Cyber Security:           0.49      0.43      0.44      3.60
Drug:                     0.89      0.88      0.89     17.70
Fraud:                    0.84      0.90      0.87     20.90
Gambling:                 0.98      0.96      0.97      7.10
Murder:                   0.82      0.95      0.88     25.00
National Security:        0.84      0.93      0.88     18.30
Sexual Abuse:             0.91      0.87      0.88     10.90
State Crime:              0.74      0.49      0.55      4.20
Theft / Burglary:         0.91      0.90      0.90      9.30
Trafficking:              0.71      0.73      0.69      3.60
Non-crime:                0.45      0.35      0.36      1.70

Accuracy                                      0.85    141.70
Weighted avg:             0.82      0.78      0.79    141.70
Macro avg:                0.86      0.85      0.85    141.70
```
