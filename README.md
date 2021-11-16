# KFold
## **Round 1**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.33      0.50         3
Battery / Assault       0.58      0.64      0.61        11
          Bribery       0.67      1.00      0.80         2
   Cyber Security       0.75      0.75      0.75         4
             Drug       1.00      0.84      0.91        19
            Fraud       0.84      0.80      0.82        20
         Gambling       1.00      0.86      0.92         7
           Murder       0.79      1.00      0.88        26
National Security       0.91      0.88      0.89        24
        Non-crime       1.00      1.00      1.00         2
     Sexual Abuse       0.73      0.73      0.73        11
      State Crime       0.00      0.00      0.00         3
 Theft / Burglary       0.89      0.89      0.89         9
      Trafficking       1.00      1.00      1.00         5

         accuracy                           0.83       146
        macro avg       0.80      0.77      0.76       146
     weighted avg       0.84      0.83      0.82       146

```
### **Confustion matrix**
```
[[ 1  0  0  0  0  0  0  1  0  0  1  0  0  0]
 [ 0  7  0  0  0  0  0  4  0  0  0  0  0  0]
 [ 0  0  2  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  1  0  0  0  0  0  0  0  0]
 [ 0  2  0  0 16  0  0  0  0  0  0  0  1  0]
 [ 0  0  1  0  0 16  0  1  0  0  2  0  0  0]
 [ 0  0  0  0  0  1  6  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 26  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1 21  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  2  0  1  0  0  0  0  0  0  8  0  0  0]
 [ 0  1  0  0  0  0  0  0  2  0  0  0  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  8  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 2**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         9
Battery / Assault       1.00      0.56      0.71         9
          Bribery       0.67      0.50      0.57         4
   Cyber Security       0.50      0.33      0.40         3
             Drug       0.90      0.90      0.90        20
            Fraud       0.88      0.88      0.88        24
         Gambling       0.75      1.00      0.86         3
           Murder       0.78      1.00      0.88        21
National Security       0.82      0.95      0.88        19
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       0.91      1.00      0.95        10
      State Crime       1.00      0.71      0.83         7
 Theft / Burglary       1.00      1.00      1.00         9
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.87       146
        macro avg       0.87      0.78      0.80       146
     weighted avg       0.88      0.87      0.86       146

```
### **Confustion matrix**
```
[[ 9  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  5  0  0  0  0  0  3  1  0  0  0  0  0]
 [ 0  0  2  0  1  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 18  0  0  2  0  0  0  0  0  0]
 [ 0  0  1  1  0 21  1  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  3  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0 21  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  1  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  5  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  0  1  0  0  4]]
```
## **Round 3**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      1.00      1.00         4
Battery / Assault       0.86      0.60      0.71        10
          Bribery       1.00      0.50      0.67         4
   Cyber Security       0.33      0.33      0.33         6
             Drug       0.88      0.88      0.88        16
            Fraud       0.77      0.81      0.79        21
         Gambling       0.83      1.00      0.91         5
           Murder       0.82      0.97      0.89        29
National Security       0.81      0.94      0.87        18
     Sexual Abuse       0.92      0.86      0.89        14
      State Crime       0.50      0.25      0.33         4
 Theft / Burglary       0.90      0.82      0.86        11
      Trafficking       1.00      0.75      0.86         4

         accuracy                           0.82       146
        macro avg       0.82      0.75      0.77       146
     weighted avg       0.82      0.82      0.81       146

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  3  0  0  1  0  0]
 [ 0  0  2  0  0  1  1  0  0  0  0  0  0]
 [ 0  0  0  2  0  3  0  0  1  0  0  0  0]
 [ 0  0  0  0 14  0  0  1  0  0  0  1  0]
 [ 0  0  0  3  1 17  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 28  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0 17  0  0  0  0]
 [ 0  1  0  0  0  1  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  1  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  0  9  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  3]]
```
## **Round 4**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.75      1.00      0.86         9
Battery / Assault       0.90      0.90      0.90        10
          Bribery       0.00      0.00      0.00         5
   Cyber Security       0.60      0.75      0.67         4
             Drug       0.64      0.75      0.69        12
            Fraud       0.77      0.77      0.77        26
         Gambling       1.00      1.00      1.00         5
           Murder       0.88      0.92      0.90        25
National Security       0.81      1.00      0.89        17
        Non-crime       1.00      0.33      0.50         3
     Sexual Abuse       1.00      0.92      0.96        13
      State Crime       1.00      0.33      0.50         3
 Theft / Burglary       0.89      0.73      0.80        11
      Trafficking       0.50      0.50      0.50         2

         accuracy                           0.81       145
        macro avg       0.77      0.71      0.71       145
     weighted avg       0.80      0.81      0.80       145

```
### **Confustion matrix**
```
[[ 9  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  9  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  1  4  0  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  1  0  0  0  0  0]
 [ 0  0  0  0  9  2  0  0  0  0  0  0  0  1]
 [ 0  0  1  1  2 20  0  1  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0  0]
 [ 0  1  0  0  1  0  0 23  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 17  0  0  0  0  0]
 [ 0  0  0  1  0  0  0  0  1  1  0  0  0  0]
 [ 1  0  0  0  0  0  0  0  0  0 12  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  1  0  0]
 [ 1  0  0  0  1  0  0  1  0  0  0  0  8  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  1]]
```
## **Round 5**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.86      0.92         7
Battery / Assault       0.86      0.67      0.75         9
          Bribery       1.00      1.00      1.00         4
   Cyber Security       1.00      0.33      0.50         3
             Drug       0.84      0.94      0.89        17
            Fraud       0.89      0.94      0.92        18
         Gambling       1.00      0.91      0.95        11
           Murder       0.89      0.94      0.91        33
National Security       0.87      0.93      0.90        14
        Non-crime       1.00      1.00      1.00         1
     Sexual Abuse       0.82      1.00      0.90         9
      State Crime       0.60      0.60      0.60         5
 Theft / Burglary       1.00      0.86      0.92         7
      Trafficking       1.00      0.86      0.92         7

         accuracy                           0.89       145
        macro avg       0.91      0.85      0.86       145
     weighted avg       0.90      0.89      0.89       145

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  6  0  0  0  0  0  1  0  0  1  1  0  0]
 [ 0  0  4  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 16  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  1 17  0  0  0  0  0  0  0  0]
 [ 0  1  0  0  0  0 10  0  0  0  0  0  0  0]
 [ 0  0  0  0  1  0  0 31  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0  0 13  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  1  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  9  0  0  0]
 [ 0  0  0  0  0  0  0  0  2  0  0  3  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  6  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  0  6]]
```
## **Round 6**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.80      0.67      0.73         6
Battery / Assault       1.00      0.55      0.71        11
          Bribery       1.00      0.75      0.86         4
   Cyber Security       1.00      0.33      0.50         3
             Drug       0.88      0.83      0.86        18
            Fraud       0.83      0.95      0.88        20
         Gambling       1.00      0.75      0.86         8
           Murder       0.74      1.00      0.85        26
National Security       0.82      1.00      0.90        18
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       1.00      1.00      1.00         7
      State Crime       1.00      0.50      0.67         6
 Theft / Burglary       0.91      0.91      0.91        11
      Trafficking       1.00      1.00      1.00         6

         accuracy                           0.86       145
        macro avg       0.86      0.73      0.77       145
     weighted avg       0.87      0.86      0.84       145

```
### **Confustion matrix**
```
[[ 4  0  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  6  0  0  1  0  0  4  0  0  0  0  0  0]
 [ 0  0  3  0  0  1  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  1  0  0  0  0  0]
 [ 1  0  0  0 15  0  0  2  0  0  0  0  0  0]
 [ 0  0  0  0  1 19  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  1  6  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  0 26  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 18  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  3  0  0  3  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  6]]
```
## **Round 7**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      0.83      0.83         6
Battery / Assault       0.89      0.80      0.84        10
          Bribery       0.75      0.60      0.67         5
   Cyber Security       0.50      0.25      0.33         4
             Drug       0.86      0.90      0.88        21
            Fraud       0.75      0.95      0.84        19
         Gambling       1.00      0.83      0.91        12
           Murder       0.77      0.91      0.83        22
National Security       0.80      0.84      0.82        19
        Non-crime       1.00      0.50      0.67         4
     Sexual Abuse       0.78      0.78      0.78         9
      State Crime       0.50      0.50      0.50         2
 Theft / Burglary       1.00      0.71      0.83         7
      Trafficking       1.00      0.80      0.89         5

         accuracy                           0.82       145
        macro avg       0.82      0.73      0.76       145
     weighted avg       0.83      0.82      0.82       145

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  1  0  0  0  0  0  0]
 [ 0  8  0  0  0  0  0  2  0  0  0  0  0  0]
 [ 0  0  3  0  0  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0  2  0  0  0  0  0]
 [ 0  0  0  0 19  0  0  0  0  0  2  0  0  0]
 [ 0  0  0  1  0 18  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  2 10  0  0  0  0  0  0  0]
 [ 0  0  1  0  1  0  0 20  0  0  0  0  0  0]
 [ 0  1  0  0  0  0  0  1 16  0  0  1  0  0]
 [ 0  0  0  0  1  0  0  0  1  2  0  0  0  0]
 [ 0  0  0  0  0  0  0  2  0  0  7  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  1  0  0]
 [ 0  0  0  0  1  1  0  0  0  0  0  0  5  0]
 [ 1  0  0  0  0  0  0  0  0  0  0  0  0  4]]
```
## **Round 8**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.86      1.00      0.92         6
Battery / Assault       0.89      0.80      0.84        10
          Bribery       1.00      0.40      0.57         5
   Cyber Security       0.67      0.33      0.44         6
             Drug       0.88      0.88      0.88        16
            Fraud       0.67      0.94      0.78        17
         Gambling       0.89      1.00      0.94         8
           Murder       0.86      0.92      0.89        26
National Security       0.95      0.91      0.93        22
        Non-crime       1.00      1.00      1.00         2
     Sexual Abuse       1.00      0.77      0.87        13
      State Crime       0.50      0.67      0.57         3
 Theft / Burglary       1.00      0.83      0.91         6
      Trafficking       1.00      1.00      1.00         5

         accuracy                           0.86       145
        macro avg       0.87      0.82      0.82       145
     weighted avg       0.87      0.86      0.85       145

```
### **Confustion matrix**
```
[[ 6  0  0  0  0  0  0  0  0  0  0  0  0  0]
 [ 0  8  0  0  1  0  0  1  0  0  0  0  0  0]
 [ 0  0  2  0  1  2  0  0  0  0  0  0  0  0]
 [ 0  0  0  2  0  4  0  0  0  0  0  0  0  0]
 [ 0  0  0  0 14  1  0  1  0  0  0  0  0  0]
 [ 0  0  0  1  0 16  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  8  0  0  0  0  0  0  0]
 [ 1  1  0  0  0  0  0 24  0  0  0  0  0  0]
 [ 0  0  0  0  0  0  0  0 20  0  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  2  0  0  0  0]
 [ 0  0  0  0  0  0  1  2  0  0 10  0  0  0]
 [ 0  0  0  0  0  0  0  0  1  0  0  2  0  0]
 [ 0  0  0  0  0  1  0  0  0  0  0  0  5  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  0  5]]
```
## **Round 9**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       1.00      0.75      0.86         4
Battery / Assault       0.91      0.71      0.80        14
          Bribery       1.00      1.00      1.00         3
             Drug       0.94      0.79      0.86        19
            Fraud       0.95      0.95      0.95        20
         Gambling       1.00      1.00      1.00         8
           Murder       0.96      0.96      0.96        28
National Security       0.83      0.94      0.88        16
        Non-crime       0.00      0.00      0.00         1
     Sexual Abuse       0.76      0.93      0.84        14
      State Crime       0.75      0.60      0.67         5
 Theft / Burglary       0.83      0.91      0.87        11
      Trafficking       0.40      1.00      0.57         2

         accuracy                           0.88       145
        macro avg       0.80      0.81      0.79       145
     weighted avg       0.89      0.88      0.88       145

```
### **Confustion matrix**
```
[[ 3  1  0  0  0  0  0  0  0  0  0  0  0]
 [ 0 10  0  0  0  0  0  1  0  2  0  1  0]
 [ 0  0  3  0  0  0  0  0  0  0  0  0  0]
 [ 0  0  0 15  0  0  1  0  0  1  0  1  1]
 [ 0  0  0  1 19  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  8  0  0  0  0  0  0  0]
 [ 0  0  0  0  0  0 27  0  0  1  0  0  0]
 [ 0  0  0  0  0  0  0 15  0  0  1  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  1]
 [ 0  0  0  0  0  0  0  0  0 13  0  0  1]
 [ 0  0  0  0  0  0  0  2  0  0  3  0  0]
 [ 0  0  0  0  1  0  0  0  0  0  0 10  0]
 [ 0  0  0  0  0  0  0  0  0  0  0  0  2]]
```
## **Round 10**
### **Classification_report**
```
                   precision    recall  f1-score   support

         Accident       0.83      0.83      0.83         6
Battery / Assault       0.79      0.79      0.79        14
          Bribery       1.00      0.67      0.80         3
   Cyber Security       0.60      1.00      0.75         3
             Drug       0.92      0.96      0.94        23
            Fraud       0.92      0.92      0.92        24
         Gambling       1.00      1.00      1.00         5
           Murder       0.81      0.89      0.85        19
National Security       0.78      0.88      0.82        16
     Sexual Abuse       1.00      0.80      0.89        10
      State Crime       1.00      0.33      0.50         6
 Theft / Burglary       0.93      1.00      0.96        13
      Trafficking       1.00      0.67      0.80         3

         accuracy                           0.87       145
        macro avg       0.89      0.83      0.83       145
     weighted avg       0.88      0.87      0.86       145

```
### **Confustion matrix**
```
[[ 5  0  0  0  0  0  0  1  0  0  0  0  0]
 [ 0 11  0  0  0  0  0  3  0  0  0  0  0]
 [ 0  0  2  0  0  1  0  0  0  0  0  0  0]
 [ 0  0  0  3  0  0  0  0  0  0  0  0  0]
 [ 0  0  0  1 22  0  0  0  0  0  0  0  0]
 [ 0  0  0  0  1 22  0  0  0  0  0  1  0]
 [ 0  0  0  0  0  0  5  0  0  0  0  0  0]
 [ 1  1  0  0  0  0  0 17  0  0  0  0  0]
 [ 0  0  0  1  0  1  0  0 14  0  0  0  0]
 [ 0  2  0  0  0  0  0  0  0  8  0  0  0]
 [ 0  0  0  0  0  0  0  0  4  0  2  0  0]
 [ 0  0  0  0  0  0  0  0  0  0  0 13  0]
 [ 0  0  0  0  1  0  0  0  0  0  0  0  2]]
```
## Avg Classification Report of 10 KFold
```
                     precision    recall  f1-score   support
Accident:                 0.91      0.83      0.85      6.00
Battery / Assault:        0.87      0.70      0.77     10.80
Bribery:                  0.81      0.64      0.69      3.90
Cyber Security:           0.59      0.44      0.47      3.60
Drug:                     0.87      0.87      0.87     18.10
Fraud:                    0.83      0.89      0.85     20.90
Gambling:                 0.95      0.93      0.93      7.20
Murder:                   0.83      0.95      0.88     25.50
National Security:        0.84      0.93      0.88     18.30
Sexual Abuse:             0.89      0.88      0.88     11.00
State Crime:              0.69      0.45      0.52      4.40
Theft / Burglary:         0.93      0.87      0.90      9.50
Trafficking:              0.89      0.84      0.84      4.40
Non-crime:                0.60      0.42      0.47      1.70

Accuracy                                      0.85    145.30
Weighted avg:             0.84      0.78      0.79    145.30
Macro avg:                0.86      0.85      0.84    145.30
```
