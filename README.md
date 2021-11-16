# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      1.00      0.80         2
Battery / Assault       0.86      0.55      0.67        11
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.50      0.20      0.29         5
             Drug       1.00      0.86      0.92        14
            Fraud       0.77      0.95      0.85        21
         Gambling       0.86      1.00      0.92         6
           Murder       0.82      1.00      0.90        28
National Security       0.85      0.96      0.90        23
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.88      0.93      0.90        15
      State Crime       0.00      0.00      0.00         2
 Theft / Burglary       1.00      0.62      0.77         8
      Trafficking       1.00      1.00      1.00         4

         accuracy                           0.85       145
        macro avg       0.80      0.72      0.73       145
     weighted avg       0.84      0.85      0.83       145

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  3  0  0  2  0  0  0]
 [ 0  0  2  0  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  3  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 12  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0 20  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 28  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 22  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  1  1  0  0  0  0]
 [ 0  1  0  0  0  0  0  0  0  0 14  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 1  0  0  0  0  2  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.80      0.89         5
Battery / Assault       0.40      0.40      0.40         5
          Bribery       1.00      1.00      1.00         3
   Cyber Security       0.60      0.75      0.67         4
             Drug       0.95      0.83      0.89        24
            Fraud       0.87      1.00      0.93        20
         Gambling       1.00      1.00      1.00         4
           Murder       0.77      1.00      0.87        20
National Security       0.68      0.85      0.76        20
        Non-crime       0.00      0.00      0.00         3
     Sexual Abuse       1.00      0.92      0.96        13
      State Crime       0.67      0.22      0.33         9
 Theft / Burglary       0.88      0.78      0.82         9
      Trafficking       1.00      1.00      1.00         6

         accuracy                           0.83       145
        macro avg       0.77      0.75      0.75       145
     weighted avg       0.82      0.83      0.81       145

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  2  0  0  0  0  0  1  1  0  0  1  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 20  1  0  2  0  0  0  0  1  0]
 [ 0  0  0  0  0 20  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 20  0  0  0  0  0  0]
 [ 0  1  0  1  0  0  0  1 17  0  0  0  0  0]
 [ 0  2  0  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  7  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  6]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.83      0.91         6
Battery / Assault       0.78      0.70      0.74        10
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.67      0.40      0.50         5
             Drug       0.88      0.93      0.90        15
            Fraud       0.85      0.92      0.88        24
         Gambling       1.00      1.00      1.00         6
           Murder       0.85      0.88      0.87        26
National Security       0.89      0.94      0.91        17
     Sexual Abuse       0.69      0.82      0.75        11
      State Crime       0.80      1.00      0.89         4
 Theft / Burglary       1.00      0.91      0.95        11
      Trafficking       1.00      0.83      0.91         6

         accuracy                           0.86       145
        macro avg       0.88      0.82      0.84       145
     weighted avg       0.87      0.86      0.86       145

```
### **Confustion matrix**
```
[[ 5  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  2  0  0  2  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  1  0  0  2  0  0  0  0]
 [ 0  0  0  0 14  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0 22  0  0  0  2  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0]
 [ 0  1  0  0  2  0  0 23  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 16  0  1  0  0]
 [ 0  0  0  1  0  1  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  4  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  5]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.90      0.82      0.86        11
Battery / Assault       0.85      0.92      0.88        12
          Bribery       0.00      0.00      0.00         2
   Cyber Security       0.25      0.50      0.33         2
             Drug       0.75      0.92      0.83        13
            Fraud       0.81      0.71      0.76        24
         Gambling       0.89      0.89      0.89         9
           Murder       0.84      0.88      0.86        24
National Security       0.94      0.94      0.94        18
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.80      1.00      0.89        12
      State Crime       0.50      1.00      0.67         1
 Theft / Burglary       1.00      0.80      0.89        10
      Trafficking       1.00      0.50      0.67         4

         accuracy                           0.83       145
        macro avg       0.75      0.73      0.71       145
     weighted avg       0.84      0.83      0.82       145

```
### **Confustion matrix**
```
[[ 9  0  0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0 11  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0  0]
 [ 0  1  0  0 12  0  0  0  0  0  0  0  0  0]
 [ 0  0  1  2  2 17  1  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  8  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  0 21  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 17  0  0  1  0  0]
 [ 0  0  0  1  0  0  0  0  1  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  1  0  0  1  0  0  0  0  8  0]
 [ 1  0  0  0  0  0  0  0  0  0  1  0  0  2]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.86      0.92         7
Battery / Assault       0.75      0.82      0.78        11
          Bribery       1.00      0.57      0.73         7
   Cyber Security       1.00      0.33      0.50         3
             Drug       0.82      0.82      0.82        22
            Fraud       0.87      0.87      0.87        23
         Gambling       1.00      1.00      1.00         8
           Murder       0.83      1.00      0.91        25
National Security       0.87      1.00      0.93        13
     Sexual Abuse       1.00      0.78      0.88         9
      State Crime       0.80      0.67      0.73         6
 Theft / Burglary       0.86      0.86      0.86         7
      Trafficking       0.80      1.00      0.89         4

         accuracy                           0.86       145
        macro avg       0.89      0.81      0.83       145
     weighted avg       0.87      0.86      0.86       145

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  4  0  2  1  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  0  0  0  0  0]
 [ 0  1  0  0 18  0  0  2  0  0  0  0  1]
 [ 0  0  0  0  2 20  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 25  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 13  0  0  0  0]
 [ 0  2  0  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  4  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  6  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      1.00      0.86         3
Battery / Assault       0.83      0.50      0.62        10
          Bribery       1.00      0.40      0.57         5
   Cyber Security       1.00      0.75      0.86         4
             Drug       0.87      0.93      0.90        14
            Fraud       0.83      0.95      0.89        21
         Gambling       1.00      0.78      0.88         9
           Murder       0.86      1.00      0.92        36
National Security       0.75      1.00      0.86        15
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      1.00      1.00         5
      State Crime       1.00      0.17      0.29         6
 Theft / Burglary       0.92      1.00      0.96        12
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.86       145
        macro avg       0.84      0.73      0.75       145
     weighted avg       0.87      0.86      0.84       145

```
### **Confustion matrix**
```
[[ 3  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  0  2  0  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  1  0  0  0  0  0  0  0  0]
 [ 1  0  0  0 13  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1 20  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  7  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 36  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 15  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0 12  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  3]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.88      0.78      0.82         9
Battery / Assault       0.78      0.78      0.78         9
          Bribery       0.67      1.00      0.80         4
   Cyber Security       0.67      0.67      0.67         3
             Drug       0.91      0.91      0.91        22
            Fraud       0.93      0.88      0.90        16
         Gambling       1.00      0.86      0.92         7
           Murder       0.77      0.96      0.86        25
National Security       0.87      0.91      0.89        22
        Non-crime       1.00      0.50      0.67         4
     Sexual Abuse       0.75      0.67      0.71         9
      State Crime       0.67      0.50      0.57         4
 Theft / Burglary       1.00      0.83      0.91         6
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.85       145
        macro avg       0.85      0.79      0.81       145
     weighted avg       0.86      0.85      0.85       145

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  4  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 20  0  0  0  0  0  2  0  0  0]
 [ 0  0  1  1  0 14  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  6  0  0  0  0  0  0  0]
 [ 0  0  1  0  0  0  0 24  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  0 20  0  0  1  0  0]
 [ 0  0  0  0  1  0  0  0  1  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  3  0  0  6  0  0  0]
 [ 0  1  0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  5  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.90      1.00      0.95         9
Battery / Assault       0.89      0.67      0.76        12
          Bribery       1.00      0.40      0.57         5
   Cyber Security       0.67      0.33      0.44         6
             Drug       0.81      0.87      0.84        15
            Fraud       0.70      0.94      0.80        17
         Gambling       1.00      1.00      1.00        11
           Murder       0.81      0.92      0.86        24
National Security       0.90      0.90      0.90        20
        Non-crime       1.00      1.00      1.00         2
     Sexual Abuse       1.00      0.83      0.91        12
      State Crime       0.00      0.00      0.00         1
 Theft / Burglary       1.00      0.83      0.91         6
      Trafficking       1.00      1.00      1.00         5

         accuracy                           0.85       145
        macro avg       0.83      0.76      0.78       145
     weighted avg       0.86      0.85      0.84       145

```
### **Confustion matrix**
```
[[ 9  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  8  0  0  2  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  1  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  3  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 13  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0 16  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 11  0  0  0  0  0  0  0]
 [ 1  1  0  0  0  0  0 22  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.50      0.67         2
Battery / Assault       0.89      0.67      0.76        12
          Bribery       1.00      1.00      1.00         3
   Cyber Security       0.00      0.00      0.00         2
             Drug       0.94      0.89      0.91        18
            Fraud       0.90      0.90      0.90        20
         Gambling       1.00      1.00      1.00         9
           Murder       0.93      0.96      0.95        28
National Security       0.80      0.94      0.86        17
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.81      0.93      0.87        14
      State Crime       0.75      0.60      0.67         5
 Theft / Burglary       0.83      0.83      0.83        12
      Trafficking       0.40      1.00      0.57         2

         accuracy                           0.87       145
        macro avg       0.73      0.73      0.71       145
     weighted avg       0.86      0.87      0.86       145

```
### **Confustion matrix**
```
[[ 1  1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  8  0  0  0  0  0  0  1  0  2  0  1  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  0  0  0  0  0  1  1]
 [ 0  0  0  0  1 18  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  9  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 27  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 16  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  0  0  0  0  0  0 13  0  0  1]
 [ 0  0  0  0  0  0  0  0  2  0  0  3  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      0.80      0.80         5
Battery / Assault       0.79      0.79      0.79        14
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.50      1.00      0.67         2
             Drug       0.92      0.92      0.92        24
            Fraud       0.91      0.91      0.91        23
         Gambling       0.75      1.00      0.86         3
           Murder       0.81      0.89      0.85        19
National Security       0.80      0.89      0.84        18
     Sexual Abuse       1.00      0.80      0.89        10
      State Crime       1.00      0.33      0.50         6
 Theft / Burglary       0.93      1.00      0.96        13
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.86       144
        macro avg       0.86      0.83      0.82       144
     weighted avg       0.88      0.86      0.86       144

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0 11  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1 22  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  1 21  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 1  1  0  0  0  0  0 17  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0 16  0  0  0  0]
 [ 0  2  0  0  0  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0 13  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  3]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.89      0.84      0.85      5.90
Battery / Assault:        0.78      0.68      0.72     10.60
Bribery:                  0.87      0.62      0.69      3.90
Cyber Security:           0.58      0.49      0.49      3.60
Drug:                     0.88      0.89      0.88     18.10
Fraud:                    0.84      0.90      0.87     20.90
Gambling:                 0.95      0.95      0.95      7.20
Murder:                   0.83      0.95      0.88     25.50
National Security:        0.83      0.93      0.88     18.30
Sexual Abuse:             0.89      0.87      0.87     11.00
State Crime:              0.62      0.45      0.46      4.40
Theft / Burglary:         0.94      0.85      0.89      9.40
Trafficking:              0.92      0.86      0.86      4.40
Non-crime:                0.40      0.22      0.27      1.70

Accuracy                                      0.85    144.90
Weighted avg:             0.82      0.77      0.77    144.90
Macro avg:                0.86      0.85      0.84    144.90
```
