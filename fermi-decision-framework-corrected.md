# Fermi ROI Decision Framework

## Core Questions and Their Exact Scales

### 1. How many customers care about this topic?
Fermi Value | Definition
------------|------------
100 | Definitionally everyone
70 | Most
30 | Some
0 | I can think of one or two
0 | No one

### 2. How much do those customers care?
Fermi Value | Definition
------------|------------
1000 | Mission-critical to the success of their project
100 | "I care; this is a serious concern we've discussed internally"
10 | "I'm curious, tell me more"
1 | "Meh, whatever"
0 | "Don't waste my time with this"

### 3. How insightful is our perspective on this topic?
Fermi Value | Definition
------------|------------
1000 | "Wow!!! This changes everything."
100 | "I took notes, thanks, that's a great point."
10 | "Yup, OK, makes sense."
1 | "No shit, Sherlock."
0 | "No clue what you're even talking about."

### 4. How powerfully or uniquely does our product pay off the insight?
Fermi Value | Definition
------------|------------
1000 | "Whoa, I'll buy our product just for that alone!"
100 | "Ohhh, nice, ok I'll take a look."
10 | "That's fine."
1 | "So what?"
0 | "I actively do not want this."

### 5. Time Estimate (Effort)
Value | Definition
------|------------
2d | Two days
2w | Two weeks
2m | Two months

## Tie-Breaking Questions

### Team Excitement
Fermi Value | Definition
------------|------------
0 | No one is excited to work on it.
1 | One person is excited to work on it.
10 | About half the team is excited to work on it.
100 | All, or all but one, is excited to work on it.

### Confidence
Fermi Value | Definition
------------|------------
0 | There's no way we can pull this off.
1 | I mean we can try, but don't be surprised when it fails.
10 | We can probably do this; we'll be surprised if it goes very wrong.
100 | This is completely within our domain of expertise, we've successfully executed something similar in the past, and nothing in the task-breakdown is uncertain.

## Key Decision-Making Questions to Ask

1. "Are we trying to maximize a single metric or multiple metrics?"
   - If single metric: Use straightforward ROI calculation
   - If multiple metrics: Go to question 2

2. "Do ALL metrics need to succeed for the overall goal to succeed?"
   - If yes: Multiply the scores
   - If no: Go to question 3

3. "Are we working on primary strategic items or secondary 'quick wins'?"
   - If primary: Choose the most important metric and use only that
   - If secondary: It's acceptable to add scores

4. "Do we have a tie between options?"
   If yes, ask:
   - "If we maximize this one dimension in the next few months, then even if we get nothing else accomplished, will it still be a success?"
   - "Conversely, if we moved other needles, but this dimension remained unchanged, will it have been a failure?"
   Use the answers to select which dimension to use for the tie-breaker.

5. "Is this part of a larger project that requires multiple components?"
   - If yes: Mark all related items with the same color
   - Remember: Either implement all items of that color, or none

## Calculation Methods

### Single Metric ROI
```
ROI = Impact Value / Days of Effort
```

### Multiple Required Metrics
```
Total Score = Value1 × Value2 × Value3 × Value4
ROI = Total Score / Days of Effort
```

### Secondary Features (Equal Importance)
```
Total Score = Value1 + Value2 + Value3 + Value4
ROI = Total Score / Days of Effort
```

## Tie-Breaking Methods (Choose One)

1. Run-off using fewer dimensions
   - Select most critical 1-2 dimensions
   - Recalculate using only those
   - Example from article: "insight × reach" only

2. Team Excitement
   - Use the team excitement scale
   - Higher excitement wins

3. Confidence
   - Use the confidence scale
   - Higher confidence wins

## Important Principles

1. All estimates must be Fermi estimates (powers of ten or explicitly defined values)

2. Never try to increase precision unless:
   - You are certain the precision is accurate, or
   - You are creating an intentional bias

3. When using multiple metrics:
   - Don't combine unlike attributes unless necessary
   - When you must combine, decide if multiplication or addition is appropriate
   - Use multiplication when all factors are required for success
   - Use addition only for secondary features of equal importance

4. Remember that typical outcomes are:
   - 20% less impact than estimated
   - 50% more time than estimated

5. Decisions should be:
   - Easy to explain
   - Stable even with typical estimation errors
   - Strategic rather than tactical when possible

