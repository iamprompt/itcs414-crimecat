# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.67      1.00      0.80         2
Battery / Assault       1.00      0.58      0.74        12
          Bribery       1.00      0.25      0.40         4
   Cyber Security       0.00      0.00      0.00         0
             Drug       0.83      1.00      0.91        15
            Fraud       0.92      0.88      0.90        25
         Gambling       1.00      1.00      1.00         4
           Murder       0.82      0.93      0.87        29
National Security       0.95      1.00      0.98        21
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.89      0.89      0.89         9
      State Crime       1.00      1.00      1.00         2
 Theft / Burglary       1.00      0.89      0.94         9

         accuracy                           0.89       133
        macro avg       0.85      0.80      0.80       133
     weighted avg       0.91      0.89      0.88       133

```
### **Confustion matrix**
```
[[ 2  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  7  0  0  0  0  0  5  0  0  0  0  0]
 [ 0  0  1  0  1  1  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  1 22  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 1  0  0  0  1  0  0 27  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 21  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  8  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  2  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  8]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.83      0.91         6
Battery / Assault       0.83      0.62      0.71         8
          Bribery       1.00      1.00      1.00         4
   Cyber Security       1.00      1.00      1.00         3
             Drug       0.94      0.88      0.91        17
            Fraud       0.87      1.00      0.93        20
         Gambling       0.83      1.00      0.91         5
           Murder       0.74      0.94      0.83        18
National Security       0.79      0.92      0.85        24
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.86      0.67      0.75         9
      State Crime       0.00      0.00      0.00         4
 Theft / Burglary       1.00      0.82      0.90        11
      Trafficking       1.00      1.00      1.00         1

         accuracy                           0.85       133
        macro avg       0.85      0.79      0.80       133
     weighted avg       0.84      0.85      0.84       133

```
### **Confustion matrix**
```
[[ 5  1  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  2  1  0  0  0  0  0]
 [ 0  0  4  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 15  1  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  0 20  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 17  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 22  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  1  1  0  0  0  0]
 [ 0  0  0  0  0  1  1  1  0  0  6  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  1  0  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         8
Battery / Assault       0.60      0.60      0.60        10
          Bribery       1.00      1.00      1.00         3
   Cyber Security       1.00      0.50      0.67         2
             Drug       1.00      0.94      0.97        16
            Fraud       0.95      1.00      0.98        20
         Gambling       1.00      1.00      1.00         6
           Murder       0.79      0.96      0.87        24
National Security       1.00      1.00      1.00        13
     Sexual Abuse       0.83      0.77      0.80        13
      State Crime       1.00      1.00      1.00         1
 Theft / Burglary       1.00      0.92      0.96        12
      Trafficking       1.00      0.60      0.75         5

         accuracy                           0.90       133
        macro avg       0.94      0.87      0.89       133
     weighted avg       0.91      0.90      0.90       133

```
### **Confustion matrix**
```
[[ 8  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  4  0  0  0  0  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  0 15  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0 20  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  6  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 23  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 13  0  0  0  0]
 [ 0  3  0  0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0 11  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  3]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         6
Battery / Assault       0.67      1.00      0.80         4
          Bribery       0.00      0.00      0.00         1
   Cyber Security       0.33      0.20      0.25         5
             Drug       0.87      0.95      0.91        21
            Fraud       0.80      0.76      0.78        21
         Gambling       0.80      0.80      0.80         5
           Murder       0.88      1.00      0.93        21
National Security       0.81      0.94      0.87        18
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.89      0.94      0.91        17
      State Crime       1.00      0.25      0.40         4
 Theft / Burglary       1.00      1.00      1.00         4
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.84       133
        macro avg       0.79      0.70      0.71       133
     weighted avg       0.84      0.84      0.82       133

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  4  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  3  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 20  0  0  0  0  0  1  0  0  0]
 [ 0  0  0  0  3 16  1  1  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 21  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 17  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  1  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0 16  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  4  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      1.00      0.91         5
Battery / Assault       1.00      0.86      0.92         7
          Bribery       1.00      0.40      0.57         5
   Cyber Security       1.00      0.25      0.40         4
             Drug       1.00      0.92      0.96        24
            Fraud       0.62      1.00      0.77        10
         Gambling       0.75      0.75      0.75         4
           Murder       0.91      0.94      0.92        32
National Security       0.86      0.92      0.89        13
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.77      0.83      0.80        12
      State Crime       0.50      0.50      0.50         2
 Theft / Burglary       0.71      0.71      0.71         7
      Trafficking       1.00      1.00      1.00         7

         accuracy                           0.86       133
        macro avg       0.78      0.72      0.72       133
     weighted avg       0.87      0.86      0.85       133

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  2  0  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  3  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 22  0  1  0  0  0  0  0  1  0]
 [ 0  0  0  0  0 10  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 30  0  0  2  0  0  0]
 [ 0  0  0  0  0  0  0  0 12  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 1  0  0  0  0  0  0  0  0  0  1  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  7]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.71      0.71      0.71         7
Battery / Assault       1.00      0.33      0.50         9
          Bribery       1.00      0.80      0.89         5
   Cyber Security       1.00      0.25      0.40         4
             Drug       0.81      0.87      0.84        15
            Fraud       0.80      0.94      0.86        17
         Gambling       1.00      1.00      1.00         4
           Murder       0.69      1.00      0.82        25
National Security       0.86      0.95      0.90        19
     Sexual Abuse       0.93      0.93      0.93        14
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       0.75      0.50      0.60         6
      Trafficking       1.00      0.50      0.67         4

         accuracy                           0.81       132
        macro avg       0.81      0.68      0.70       132
     weighted avg       0.82      0.81      0.79       132

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  3  0  0  0  0  0  6  0  0  0  0  0]
 [ 0  0  4  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0 13  0  0  1  0  1  0  0  0]
 [ 0  0  0  0  0 16  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 25  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 18  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0 13  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  0  0]
 [ 0  0  0  0  1  1  0  1  0  0  0  3  0]
 [ 1  0  0  0  1  0  0  0  0  0  0  0  2]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.86      0.92         7
Battery / Assault       0.75      0.75      0.75         8
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.33      0.33      0.33         3
             Drug       0.91      0.83      0.87        12
            Fraud       0.83      0.83      0.83        24
         Gambling       1.00      0.89      0.94         9
           Murder       0.77      1.00      0.87        20
National Security       0.90      0.90      0.90        20
        Non-crime       1.00      0.67      0.80         3
     Sexual Abuse       0.88      0.70      0.78        10
      State Crime       0.50      0.50      0.50         2
 Theft / Burglary       0.89      0.89      0.89         9
      Trafficking       0.67      1.00      0.80         2

         accuracy                           0.84       132
        macro avg       0.82      0.77      0.78       132
     weighted avg       0.85      0.84      0.84       132

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  1  0  0  0  0  0]
 [ 0  0  0  0 10  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  1 20  0  0  0  0  1  0  1  0]
 [ 0  0  0  0  0  0  8  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 20  0  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 18  0  0  1  0  0]
 [ 0  0  0  0  0  1  0  0  0  2  0  0  0  0]
 [ 0  1  0  0  0  0  0  1  0  0  7  0  0  1]
 [ 0  1  0  0  0  0  0  0  0  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.88      0.93         8
Battery / Assault       0.60      1.00      0.75         6
          Bribery       0.00      0.00      0.00         1
   Cyber Security       1.00      0.67      0.80         6
             Drug       0.93      0.82      0.87        17
            Fraud       0.93      0.93      0.93        15
         Gambling       1.00      1.00      1.00         4
           Murder       0.90      0.85      0.88        33
National Security       0.71      0.94      0.81        16
        Non-crime       1.00      0.50      0.67         4
     Sexual Abuse       0.89      1.00      0.94         8
      State Crime       0.50      0.25      0.33         4
 Theft / Burglary       1.00      1.00      1.00         7
      Trafficking       0.60      1.00      0.75         3

         accuracy                           0.86       132
        macro avg       0.79      0.77      0.76       132
     weighted avg       0.87      0.86      0.85       132

```
### **Confustion matrix**
```
[[ 7  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  4  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0 14  0  0  2  0  0  0  0  0  1]
 [ 0  0  0  0  0 14  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  0  0  4  0  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0 28  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 15  0  0  1  0  0]
 [ 0  0  0  0  1  0  0  0  0  2  0  0  0  1]
 [ 0  0  0  0  0  0  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  7  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.89      1.00      0.94         8
Battery / Assault       0.86      0.67      0.75         9
          Bribery       1.00      0.75      0.86         4
   Cyber Security       0.50      0.60      0.55         5
             Drug       0.89      0.89      0.89        18
            Fraud       0.94      0.79      0.86        19
         Gambling       1.00      1.00      1.00         7
           Murder       0.80      0.95      0.87        21
National Security       0.82      1.00      0.90        18
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       1.00      0.83      0.91         6
      State Crime       1.00      0.25      0.40         4
 Theft / Burglary       0.89      0.89      0.89         9
      Trafficking       1.00      1.00      1.00         3

         accuracy                           0.86       132
        macro avg       0.90      0.83      0.84       132
     weighted avg       0.88      0.86      0.86       132

```
### **Confustion matrix**
```
[[ 8  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  3  0  0  0  0  0  0]
 [ 0  0  3  0  1  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  1  0  0  1  0  0  0  0  0]
 [ 1  0  0  0 16  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  2  1 15  0  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  7  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0 20  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  0  0  5  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  3]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.00      0.00      0.00         1
Battery / Assault       1.00      0.40      0.57        10
          Bribery       0.50      1.00      0.67         1
   Cyber Security       0.50      1.00      0.67         2
             Drug       0.90      0.86      0.88        21
            Fraud       0.93      0.93      0.93        14
         Gambling       1.00      0.80      0.89         5
           Murder       0.81      0.81      0.81        26
National Security       0.77      1.00      0.87        20
        Non-crime       0.00      0.00      0.00         0
     Sexual Abuse       0.71      0.91      0.80        11
      State Crime       1.00      0.29      0.44         7
 Theft / Burglary       0.90      1.00      0.95         9
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.82       132
        macro avg       0.72      0.70      0.67       132
     weighted avg       0.85      0.82      0.81       132

```
### **Confustion matrix**
```
[[ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  4  0  0  0  0  0  3  0  0  3  0  0  0]
 [ 0  0  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1 18  0  0  0  0  0  1  0  1  0]
 [ 0  0  0  1  0 13  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  4  0  0  0  0  0  0  0]
 [ 1  0  1  0  1  0  0 21  1  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 20  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  5  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  4]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.81      0.79      0.79      5.80
Battery / Assault:        0.83      0.68      0.71      8.30
Bribery:                  0.75      0.59      0.62      3.10
Cyber Security:           0.67      0.48      0.51      3.40
Drug:                     0.91      0.90      0.90     17.60
Fraud:                    0.86      0.91      0.88     18.50
Gambling:                 0.94      0.92      0.93      5.30
Murder:                   0.81      0.94      0.87     24.90
National Security:        0.85      0.96      0.90     18.20
Sexual Abuse:             0.86      0.85      0.85     10.90
State Crime:              0.65      0.40      0.46      3.30
Theft / Burglary:         0.91      0.86      0.88      8.30
Trafficking:              0.83      0.79      0.79      3.30
Non-crime:                0.60      0.38      0.45      1.60

Accuracy                                      0.85    132.50
Weighted avg:             0.82      0.76      0.77    132.50
Macro avg:                0.86      0.85      0.84    132.50
```
