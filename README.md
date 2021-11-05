# KFold

## **Round 1**

### **Classification_report**

```
                   precision    recall  f1-score   support

         Accident       1.00      0.67      0.80         3
Battery / Assault       0.00      0.00      0.00         0
             Drug       1.00      1.00      1.00         7
     Sexual Abuse       0.75      1.00      0.86         6
      State Crime       0.00      0.00      0.00         1
      Trafficking       0.00      0.00      0.00         1

         accuracy                           0.83        18
        macro avg       0.46      0.44      0.44        18
     weighted avg       0.81      0.83      0.81        18

```

### **Confustion matrix**

```
[[2 1 0 0 0 0]
 [0 0 0 0 0 0]
 [0 0 7 0 0 0]
 [0 0 0 6 0 0]
 [0 0 0 1 0 0]
 [0 0 0 1 0 0]]
```

## **Round 2**

### **Classification_report**

```
              precision    recall  f1-score   support

    Accident       1.00      1.00      1.00         4
        Drug       1.00      1.00      1.00         7
      Murder       1.00      0.33      0.50         3
Sexual Abuse       0.67      1.00      0.80         4

    accuracy                           0.89        18
   macro avg       0.92      0.83      0.82        18
weighted avg       0.93      0.89      0.87        18

```

### **Confustion matrix**

```
[[4 0 0 0]
 [0 7 0 0]
 [0 0 1 2]
 [0 0 0 4]]
```

## **Round 3**

### **Classification_report**

```
                  precision    recall  f1-score   support

        Accident       0.50      1.00      0.67         3
            Drug       1.00      1.00      1.00         5
          Murder       0.00      0.00      0.00         2
    Sexual Abuse       0.67      1.00      0.80         4
     State Crime       0.00      0.00      0.00         2
Theft / Burglary       0.00      0.00      0.00         1

        accuracy                           0.71        17
       macro avg       0.36      0.50      0.41        17
    weighted avg       0.54      0.71      0.60        17

```

### **Confustion matrix**

```
[[3 0 0 0 0 0]
 [0 5 0 0 0 0]
 [1 0 0 1 0 0]
 [0 0 0 4 0 0]
 [2 0 0 0 0 0]
 [0 0 0 1 0 0]]
```

## **Round 4**

### **Classification_report**

```
                   precision    recall  f1-score   support

         Accident       0.67      1.00      0.80         2
Battery / Assault       0.00      0.00      0.00         1
             Drug       1.00      1.00      1.00         6
            Fraud       0.00      0.00      0.00         2
           Murder       1.00      1.00      1.00         2
     Sexual Abuse       0.67      1.00      0.80         4

         accuracy                           0.82        17
        macro avg       0.56      0.67      0.60        17
     weighted avg       0.71      0.82      0.75        17

```

### **Confustion matrix**

```
[[2 0 0 0 0 0]
 [1 0 0 0 0 0]
 [0 0 6 0 0 0]
 [0 0 0 0 0 2]
 [0 0 0 0 2 0]
 [0 0 0 0 0 4]]
```

## **Round 5**

### **Classification_report**

```
              precision    recall  f1-score   support

    Accident       1.00      0.50      0.67         2
        Drug       0.80      1.00      0.89         4
       Fraud       0.00      0.00      0.00         1
      Murder       0.00      0.00      0.00         1
Sexual Abuse       0.73      1.00      0.84         8
 Trafficking       0.00      0.00      0.00         1

    accuracy                           0.76        17
   macro avg       0.42      0.42      0.40        17
weighted avg       0.65      0.76      0.68        17

```

### **Confustion matrix**

```
[[1 0 0 0 1 0]
 [0 4 0 0 0 0]
 [0 1 0 0 0 0]
 [0 0 0 0 1 0]
 [0 0 0 0 8 0]
 [0 0 0 0 1 0]]
```

## **Round 6**

### **Classification_report**

```
              precision    recall  f1-score   support

    Accident       1.00      1.00      1.00         6
        Drug       1.00      1.00      1.00         5
      Murder       0.00      0.00      0.00         1
Sexual Abuse       0.83      1.00      0.91         5

    accuracy                           0.94        17
   macro avg       0.71      0.75      0.73        17
weighted avg       0.89      0.94      0.91        17

```

### **Confustion matrix**

```
[[6 0 0 0]
 [0 5 0 0]
 [0 0 0 1]
 [0 0 0 5]]
```

## **Round 7**

### **Classification_report**

```
              precision    recall  f1-score   support

    Accident       1.00      0.75      0.86         4
        Drug       0.88      1.00      0.93         7
      Murder       0.00      0.00      0.00         1
Sexual Abuse       0.67      1.00      0.80         4
 Trafficking       0.00      0.00      0.00         1

    accuracy                           0.82        17
   macro avg       0.51      0.55      0.52        17
weighted avg       0.75      0.82      0.77        17

```

### **Confustion matrix**

```
[[3 0 0 1 0]
 [0 7 0 0 0]
 [0 0 0 1 0]
 [0 0 0 4 0]
 [0 1 0 0 0]]
```

## **Round 8**

### **Classification_report**

```
                   precision    recall  f1-score   support

         Accident       0.80      1.00      0.89         4
Battery / Assault       1.00      1.00      1.00         1
             Drug       0.75      1.00      0.86         3
           Murder       1.00      1.00      1.00         1
National Security       0.00      0.00      0.00         1
     Sexual Abuse       1.00      1.00      1.00         6
 Theft / Burglary       0.00      0.00      0.00         1

         accuracy                           0.88        17
        macro avg       0.65      0.71      0.68        17
     weighted avg       0.79      0.88      0.83        17

```

### **Confustion matrix**

```
[[4 0 0 0 0 0 0]
 [0 1 0 0 0 0 0]
 [0 0 3 0 0 0 0]
 [0 0 0 1 0 0 0]
 [0 0 1 0 0 0 0]
 [0 0 0 0 0 6 0]
 [1 0 0 0 0 0 0]]
```

## **Round 9**

### **Classification_report**

```
              precision    recall  f1-score   support

    Accident       0.83      1.00      0.91         5
        Drug       0.83      1.00      0.91         5
      Murder       0.00      0.00      0.00         1
Sexual Abuse       1.00      0.83      0.91         6

    accuracy                           0.88        17
   macro avg       0.67      0.71      0.68        17
weighted avg       0.84      0.88      0.86        17

```

### **Confustion matrix**

```
[[5 0 0 0]
 [0 5 0 0]
 [1 0 0 0]
 [0 1 0 5]]
```

## **Round 10**

### **Classification_report**

```
              precision    recall  f1-score   support

    Accident       0.50      1.00      0.67         1
        Drug       0.83      1.00      0.91         5
       Fraud       0.00      0.00      0.00         1
Sexual Abuse       0.78      0.78      0.78         9
 Trafficking       0.00      0.00      0.00         1

    accuracy                           0.76        17
   macro avg       0.42      0.56      0.47        17
weighted avg       0.69      0.76      0.72        17

```

### **Confustion matrix**

```
[[1 0 0 0 0]
 [0 5 0 0 0]
 [0 0 0 1 0]
 [1 1 0 7 0]
 [0 0 0 1 0]]
```

## Avg Classification Report of 10 KFold

```
                     precision    recall  f1-score   support
Accident:                 0.83      0.89      0.83      3.40
Battery / Assault:        0.10      0.10      0.10      0.20
Cyber Security:           0.00      0.00      0.00      0.00
Drug:                     0.91      1.00      0.95      5.40
Fraud:                    0.00      0.00      0.00      0.40
Gambling:                 0.00      0.00      0.00      0.00
Murder:                   0.30      0.23      0.25      1.20
National Security:        0.00      0.00      0.00      0.10
Sexual Abuse:             0.78      0.96      0.85      5.60
State Crime:              0.00      0.00      0.00      0.30
Theft / Burglary:         0.00      0.00      0.00      0.20
Trafficking:              0.00      0.00      0.00      0.40
Non-crime:                0.00      0.00      0.00      0.00

Accuracy                                      0.83     17.20
Macro avg:                0.57      0.61      0.58     17.20
Weighted avg:             0.76      0.83      0.78     17.20
```
