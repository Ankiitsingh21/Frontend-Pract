# 🔥 PATTERN 5: PREFIX SUM - Complete Mastery Guide

---

**Priority:** 🔴 CRITICAL - Foundation for Subarray Problems  
**Duration:** 6 days (Days 56-61)  
**Total Problems:** 25 problems (5 easy + 18 medium + 2 hard)  
**Focus:** Advanced practice - NOT for learning basics

---

## 📊 Progress Tracker

**Overall:** [ ] 0/25 Problems Completed

**Sub-Patterns:**
- [ ] **5.1:** Basic 1D Prefix Sum (0/5)
- [ ] **5.2:** Prefix Sum + HashMap (0/10) ⭐ **MOST IMPORTANT**
- [ ] **5.3:** 2D Prefix Sum - Matrix (0/6)
- [ ] **5.4:** Difference Array - Range Updates (0/4)

**Templates:**
- [ ] Template 1: Basic Prefix Sum Construction
- [ ] Template 2: Prefix Sum + HashMap ⭐ **MOST CRITICAL**
- [ ] Template 3: 2D Prefix Sum
- [ ] Template 4: Difference Array

---

## 🚦 SUB-PATTERN 5.1: Basic 1D Prefix Sum

**Focus:** Prefix sum construction, range queries, equilibrium index  
**Duration:** 1 day  
**Total Problems:** 5

---

### 📚 Prerequisites (Complete BEFORE solving)

**📺 Watch:**
- **[Prefix Sum Array - Take U Forward](https://www.youtube.com/watch?v=pVS3yhlzrlQ)** `18 min` ⭐⭐ **MUST WATCH**
  - *Covers:* Construction, range queries, applications
  - *Key Concepts:* `prefix[i] = prefix[i-1] + arr[i]`, range query in O(1)

**📄 Read:**
- **[Prefix Sum Array - GeeksforGeeks](https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/)**
  - *Focus:* Construction O(n), Query O(1), Equilibrium index
  - *When to use:* Multiple range queries, optimization from O(n) to O(1)

---

### 🛠️ Template 1: Basic Prefix Sum
```cpp
// Build: O(n) | Query: O(1) | Space: O(n)
class PrefixSum {
    vector<int> prefix;
public:
    PrefixSum(vector<int>& arr) {
        int n = arr.size();
        prefix.resize(n);
        prefix[0] = arr[0];
        for(int i = 1; i < n; i++) {
            prefix[i] = prefix[i-1] + arr[i];
        }
    }
    
    int rangeSum(int L, int R) {
        if(L == 0) return prefix[R];
        return prefix[R] - prefix[L-1];
    }
};
```

**When to use:**
- Multiple range sum queries needed
- Equilibrium/pivot index problems
- Need sum up to any index in O(1)

---

### ⚔️ Problems (5)

| # | Problem | Difficulty | Pattern | Time | Status |
|---|---------|-----------|---------|------|--------|
| 1 | [Range Sum Query - Immutable (LC 303)](https://leetcode.com/problems/range-sum-query-immutable/) | 🟢 Easy | Template 1 ⭐ Foundation | 20 min | [ ] |
| 2 | [Find Pivot Index (LC 724)](https://leetcode.com/problems/find-pivot-index/) | 🟢 Easy | Equilibrium Index | 20 min | [ ] |
| 3 | [Running Sum of 1D Array (LC 1480)](https://leetcode.com/problems/running-sum-of-1d-array/) | 🟢 Easy | Build Prefix Sum | 10 min | [ ] |
| 4 | [Find Middle Index (LC 1991)](https://leetcode.com/problems/find-the-middle-index-in-array/) | 🟢 Easy | Same as Pivot | 15 min | [ ] |
| 5 | [Left and Right Sum Differences (LC 2574)](https://leetcode.com/problems/left-and-right-sum-differences/) | 🟢 Easy | Bidirectional Prefix | 20 min | [ ] |

<details>
<summary><b>Problem 1: Range Sum Query - Immutable (LC 303)</b> 🟢 Easy ⭐ Foundation</summary>

**Link:** https://leetcode.com/problems/range-sum-query-immutable/

**Pattern:** Basic prefix sum construction (Template 1)

**Description:** Design class to handle multiple range sum queries efficiently

**Key Concept:**
- Build prefix sum once in constructor: O(n)
- Answer each query in O(1): `sum(L,R) = prefix[R] - prefix[L-1]`
- Handle edge case when L = 0

**Why This Problem:**
- Foundation of all prefix sum problems
- MUST understand before proceeding

**Time Estimate:** 20 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 2: Find Pivot Index (LC 724)</b> 🟢 Easy</summary>

**Link:** https://leetcode.com/problems/find-pivot-index/

**Pattern:** Equilibrium index using prefix sum concept

**Description:** Find index where sum of left elements equals sum of right elements

**Key Concept:**
- At each index: `leftSum == rightSum`
- `rightSum = total - leftSum - nums[i]`
- Don't need explicit prefix array! (optimization)

**Why This Problem:**
- Shows prefix sum thinking without building array
- Important equilibrium pattern

**Time Estimate:** 20 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 3: Running Sum of 1D Array (LC 1480)</b> 🟢 Easy</summary>

**Link:** https://leetcode.com/problems/running-sum-of-1d-array/

**Pattern:** Build prefix sum array

**Description:** Return running sum where `runningSum[i] = sum(nums[0]…nums[i])`

**Key Concept:**
- Direct prefix sum construction
- `result[i] = result[i-1] + nums[i]`
- Simplest prefix sum problem

**Note:** You solved this in Arrays & Hashing - quick review!

**Time Estimate:** 10 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 4: Find Middle Index (LC 1991)</b> 🟢 Easy</summary>

**Link:** https://leetcode.com/problems/find-the-middle-index-in-array/

**Pattern:** Same as pivot index (Problem 2)

**Description:** Find index where left sum equals right sum

**Key Concept:**
- Identical approach to Problem 2
- Practice the equilibrium pattern again

**Time Estimate:** 15 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 5: Left and Right Sum Differences (LC 2574)</b> 🟢 Easy</summary>

**Link:** https://leetcode.com/problems/left-and-right-sum-differences/

**Pattern:** Bidirectional prefix sum

**Description:** For each index i, find `|leftSum[i] - rightSum[i]|`

**Key Concept:**
- Build leftSum array (prefix from left)
- Build rightSum array (prefix from right)
- `answer[i] = abs(leftSum[i] - rightSum[i])`

**Why This Problem:**
- Shows prefix sum can be built from both directions

**Time Estimate:** 20 minutes

**Status:** [ ] Solved

---
</details>

---

## 🚦 SUB-PATTERN 5.2: Prefix Sum + HashMap

**Focus:** 🔥 **MOST IMPORTANT SUB-PATTERN IN ENTIRE PATTERN**  
**Duration:** 3 days  
**Total Problems:** 10

**THIS is the pattern used in 80% of subarray interview questions!**

---

### 📚 Prerequisites (Complete BEFORE solving)

**📺 Watch:**
- **[Subarray Sum Equals K - NeetCode](https://www.youtube.com/watch?v=fFVZt-6sgyo)** `15 min` ⭐⭐⭐ **MOST CRITICAL**
  - *Covers:* THE core prefix sum + HashMap technique
  - *Key Insight:* `if (sum - k) exists → found subarray with sum k`
- **[Subarray Problems - Striver](https://www.youtube.com/watch?v=xvNwoz-ufXA)** `25 min`
  - *Covers:* Various applications, transformations

**📄 Read:**
- **[Subarray Sum Problems - GeeksforGeeks](https://www.geeksforgeeks.org/find-subarray-with-given-sum/)**
  - *Focus:* Why HashMap works, proof of correctness

---

### 🛠️ Template 2: Prefix Sum + HashMap ⭐⭐⭐ MOST IMPORTANT
```cpp
// Count subarrays with sum = k
// Time: O(n) | Space: O(n)
int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> prefixCount;
    prefixCount[0] = 1;  // CRITICAL: empty prefix
    
    int sum = 0, count = 0;
    
    for(int num : nums) {
        sum += num;
        
        // Check if (sum - k) exists
        if(prefixCount.find(sum - k) != prefixCount.end()) {
            count += prefixCount[sum - k];
        }
        
        prefixCount[sum]++;
    }
    
    return count;
}
```

**Core Insight:**
```
If prefix[j] - prefix[i] = k
Then subarray from (i+1) to j has sum k

At position j with sum S:
  Check if (S - k) exists in map
  If yes: found subarray(s) ending here
```

**Why `map[0] = 1`?**
- Handles subarrays starting from index 0
- Critical for correctness!

**Template Variations:**
- **Count subarrays** → Store COUNT in map value
- **Longest subarray** → Store FIRST INDEX in map value  
- **With modulo** → Store REMAINDER as map key

---

### ⚔️ Problems (10)

| # | Problem | Difficulty | Pattern | Time | Status |
|---|---------|-----------|---------|------|--------|
| 6 | [Subarray Sum Equals K (LC 560)](https://leetcode.com/problems/subarray-sum-equals-k/) | 🟡 Medium | Template 2 ⭐⭐⭐ **FOUNDATION** | 40 min | [ ] |
| 7 | [Continuous Subarray Sum (LC 523)](https://leetcode.com/problems/continuous-subarray-sum/) | 🟡 Medium | Prefix + Modulo + HashMap | 40 min | [ ] |
| 8 | [Subarray Sums Divisible by K (LC 974)](https://leetcode.com/problems/subarray-sums-divisible-by-k/) | 🟡 Medium | Prefix + Modulo (Count) | 40 min | [ ] |
| 9 | [Contiguous Array (LC 525)](https://leetcode.com/problems/contiguous-array/) | 🟡 Medium | Transform to Sum=0 | 40 min | [ ] |
| 10 | [Make Sum Divisible by P (LC 1590)](https://leetcode.com/problems/make-sum-divisible-by-p/) | 🟡 Medium | Modulo + Prefix | 45 min | [ ] |
| 11 | [Binary Subarrays With Sum (LC 930)](https://leetcode.com/problems/binary-subarrays-with-sum/) | 🟡 Medium | Template 2 Variant | 35 min | [ ] |
| 12 | [Count Nice Subarrays (LC 1248)](https://leetcode.com/problems/count-number-of-nice-subarrays/) | 🟡 Medium | Transform Then Apply | 40 min | [ ] |
| 13 | [Two Non-overlapping Subarrays (LC 1477)](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/) | 🟡 Medium | Prefix + Tracking Min | 50 min | [ ] |
| 14 | [Max Size Subarray Sum = k (LC 325)](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/) | 🟡 Medium | Store First Index | 35 min | [ ] |
| 15 | [Longest Well-Performing (LC 1124)](https://leetcode.com/problems/longest-well-performing-interval/) | 🟡 Medium | Transform to Sum>0 | 45 min | [ ] |

<details>
<summary><b>Problem 6: Subarray Sum Equals K (LC 560)</b> 🟡 Medium ⭐⭐⭐ **FOUNDATION**</summary>

**Link:** https://leetcode.com/problems/subarray-sum-equals-k/

**Pattern:** Prefix Sum + HashMap (Template 2) - **THE FOUNDATION PROBLEM**

**Description:** Count total continuous subarrays with sum = k

**Key Concept:**
- Use `map[0] = 1` as base case (empty prefix)
- At each position, check if `(currentSum - k)` exists
- Store count of each prefix sum seen so far

**Why It Works:**
```
If prefix[j] - prefix[i] = k
Then subarray from (i+1) to j has sum k

At position j with sum S:
  Check if (S - k) exists
  If yes: found subarray(s) ending here
```

**WATCH VIDEO BEFORE SOLVING!**

**This is THE most important prefix sum problem. Master this first!**

**Time Estimate:** 40 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 7: Continuous Subarray Sum (LC 523)</b> 🟡 Medium</summary>

**Link:** https://leetcode.com/problems/continuous-subarray-sum/

**Pattern:** Prefix sum with modulo + HashMap

**Description:** Check if array has subarray (size ≥ 2) with sum divisible by k

**Key Concept:**
- Store remainder: `map[sum % k] = index`
- If same remainder appears again → divisible subarray exists
- If `prefix[j] % k = r` and `prefix[i] % k = r` → `(prefix[j] - prefix[i]) % k = 0`

**Critical Edge Case:**
- Handle negative remainders: `((sum % k) + k) % k`
- Check subarray length ≥ 2

**Time Estimate:** 40 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 8: Subarray Sums Divisible by K (LC 974)</b> 🟡 Medium</summary>

**Link:** https://leetcode.com/problems/subarray-sums-divisible-by-k/

**Pattern:** Prefix sum modulo + HashMap (count version)

**Description:** Count subarrays with sum divisible by k

**Key Concept:**
- Similar to Problem 7, but COUNT instead of CHECK
- Store: `map[remainder] = count`
- Handle negative remainders: `((sum % k) + k) % k`

**Difference from Problem 7:**
- Problem 7: Check if exists (boolean) → store index
- Problem 8: Count how many → store count

**Time Estimate:** 40 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 9: Contiguous Array (LC 525)</b> 🟡 Medium</summary>

**Link:** https://leetcode.com/problems/contiguous-array/

**Pattern:** Transform to prefix sum problem

**Description:** Find max length subarray with equal 0s and 1s

**Key Transformation:**
```
Convert: 0 → -1, 1 → 1
Problem becomes: Find longest subarray with sum = 0
```

**Key Concept:**
- Store first occurrence of each sum
- `maxLen = i - map[sum]` when sum repeats
- `map[0] = -1` (before array starts)

**Why Store First Index?**
- Want MAX length → keep earliest occurrence

**Time Estimate:** 40 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 10: Make Sum Divisible by P (LC 1590)</b> 🟡 Medium</summary>

**Link:** https://leetcode.com/problems/make-sum-divisible-by-p/

**Pattern:** Prefix sum modulo + HashMap

**Description:** Remove smallest subarray so remaining sum is divisible by p

**Key Concept:**
- Find `targetRem = totalSum % p`
- Need to remove subarray with remainder = targetRem
- At each position: `needed = (currRem - targetRem + p) % p`
- Check if `needed` exists in map

**Tricky Modulo Arithmetic:**
- Must handle negative remainders carefully
- Add p before taking modulo again

**Time Estimate:** 45 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 11: Binary Subarrays With Sum (LC 930)</b> 🟡 Medium</summary>

**Link:** https://leetcode.com/problems/binary-subarrays-with-sum/

**Pattern:** Prefix sum + HashMap (like Problem 6)

**Description:** Count non-empty subarrays with sum = goal (binary array)

**Key Concept:**
- EXACT same as Problem 6!
- Binary array doesn't change approach
- Good practice to reinforce the pattern

**Time Estimate:** 35 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 12: Count Nice Subarrays (LC 1248)</b> 🟡 Medium</summary>

**Link:** https://leetcode.com/problems/count-number-of-nice-subarrays/

**Pattern:** Transform then apply Template 2

**Description:** Count subarrays with exactly k odd numbers

**Key Transformation:**
```
Convert: odd → 1, even → 0
Problem becomes: Count subarrays with sum = k
```

**Key Concept:**
- After transformation, use Template 2 directly
- `sum += (num % 2)` adds 1 for odd, 0 for even

**Shows prefix sum versatility through transformations!**

**Time Estimate:** 40 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 13: Two Non-overlapping Subarrays (LC 1477)</b> 🟡 Medium</summary>

**Link:** https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/

**Pattern:** Prefix sum + tracking minimum length

**Description:** Find minimum sum of lengths of two non-overlapping subarrays with sum = target

**Key Concept:**
- Track minimum length of subarray ending before current position
- When found subarray ending at i: check if previous exists
- Combine their lengths: `currLen + minLenBefore[i]`

**Complex combination of prefix sum + greedy tracking**

**Time Estimate:** 50 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 14: Max Size Subarray Sum = k (LC 325)</b> 🟡 Medium [PREMIUM]</summary>

**Link:** https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/

**Pattern:** Prefix sum + HashMap (store first index)

**Description:** Find length of longest subarray with sum = k

**Note:** Premium problem - skip if no access

**Key Concept:**
- Store FIRST occurrence of each sum
- `maxLen = i - map[sum - k]`
- Similar to Problem 9 but finding sum = k, not 0

**Difference from Problem 6:**
- Problem 6: Count (store count)
- Problem 14: Max length (store first index)

**Time Estimate:** 35 minutes

**Status:** [ ] Solved / [ ] Skipped (Premium)

---
</details>

<details>
<summary><b>Problem 15: Longest Well-Performing (LC 1124)</b> 🟡 Medium</summary>

**Link:** https://leetcode.com/problems/longest-well-performing-interval/

**Pattern:** Transform to find longest subarray with sum > 0

**Description:** Tiring day (>8 hours) vs non-tiring. Find longest interval with more tiring days.

**Key Transformation:**
```
Tiring day (>8) → +1
Non-tiring day (≤8) → -1
Problem: Find longest subarray with sum > 0
```

**Key Concept:**
- If `sum > 0`: `maxLen = i + 1` (from start)
- If `sum ≤ 0`: Look for `(sum - 1)` in map
- Store first occurrence of each sum

**Requires deep understanding of prefix sum logic**

**Time Estimate:** 45 minutes

**Status:** [ ] Solved

---
</details>

---

## 🚦 SUB-PATTERN 5.3: 2D Prefix Sum (Matrix)

**Focus:** Rectangle queries, 2D→1D reduction  
**Duration:** 2 days  
**Total Problems:** 6

---

### 📚 Prerequisites (Complete BEFORE solving)

**📺 Watch:**
- **[2D Prefix Sums - Errichto](https://www.youtube.com/watch?v=PwDqpOMwg6U)** `20 min` ⭐⭐ **CRITICAL**
  - *Covers:* 2D construction formula, rectangle queries
  - *Key Formula:* Inclusion-exclusion principle for 2D

**📄 Read:**
- **[Submatrix Sum Queries - GeeksforGeeks](https://www.geeksforgeeks.org/submatrix-sum-queries/)**
  - *Focus:* 2D prefix sum construction, rectangle sum query

---

### 🛠️ Template 3: 2D Prefix Sum
```cpp
// Build: O(m×n) | Query: O(1) | Space: O(m×n)
class MatrixPrefixSum {
    vector<vector<int>> prefix;
    int m, n;
public:
    MatrixPrefixSum(vector<vector<int>>& matrix) {
        m = matrix.size();
        n = matrix[0].size();
        prefix.resize(m + 1, vector<int>(n + 1, 0));
        
        // Build 2D prefix (1-indexed for easier boundaries)
        for(int i = 1; i <= m; i++) {
            for(int j = 1; j <= n; j++) {
                prefix[i][j] = matrix[i-1][j-1]
                             + prefix[i-1][j]
                             + prefix[i][j-1]
                             - prefix[i-1][j-1];
            }
        }
    }
    
    // Rectangle sum (0-indexed input)
    int rectangleSum(int r1, int c1, int r2, int c2) {
        r1++; c1++; r2++; c2++;  // Convert to 1-indexed
        return prefix[r2][c2]
             - prefix[r1-1][c2]
             - prefix[r2][c1-1]
             + prefix[r1-1][c1-1];
    }
};
```

**Construction Formula:**
```
prefix[i][j] = prefix[i-1][j]     // Above
             + prefix[i][j-1]     // Left
             - prefix[i-1][j-1]   // Remove overlap
             + matrix[i][j]       // Add current
```

**Query Formula (Inclusion-Exclusion):**
```
sum = prefix[r2][c2]         // Include
    - prefix[r1-1][c2]       // Exclude top
    - prefix[r2][c1-1]       // Exclude left
    + prefix[r1-1][c1-1]     // Add back corner (was excluded twice)
```

---

### ⚔️ Problems (6)

| # | Problem | Difficulty | Pattern | Time | Status |
|---|---------|-----------|---------|------|--------|
| 16 | [Range Sum Query 2D (LC 304)](https://leetcode.com/problems/range-sum-query-2d-immutable/) | 🟡 Medium | Template 3 ⭐ **Foundation** | 35 min | [ ] |
| 17 | [Matrix Block Sum (LC 1314)](https://leetcode.com/problems/matrix-block-sum/) | 🟡 Medium | 2D Prefix Application | 40 min | [ ] |
| 18 | [Submatrices Sum = Target (LC 1074)](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/) | 🔴 Hard | 2D→1D + HashMap | 50 min | [ ] |
| 19 | [Max Sum Rectangle ≤ K (LC 363)](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/) | 🔴 Hard | 2D→1D + Ordered Set | 60 min | [ ] |
| 20 | [Count Square Submatrices (LC 1277)](https://leetcode.com/problems/count-square-submatrices-with-all-ones/) | 🟡 Medium | 2D Prefix OR DP | 40 min | [ ] |
| 21 | [Maximal Square (LC 221)](https://leetcode.com/problems/maximal-square/) | 🟡 Medium | 2D Prefix OR DP | 35 min | [ ] |

<details>
<summary><b>Problem 16: Range Sum Query 2D (LC 304)</b> 🟡 Medium ⭐ Foundation</summary>

**Link:** https://leetcode.com/problems/range-sum-query-2d-immutable/

**Pattern:** 2D Prefix Sum (Template 3) - **FOUNDATION**

**Description:** Design class to handle multiple rectangle sum queries

**Key Concept:**
- Build 2D prefix once in constructor: O(m×n)
- Answer each query in O(1) using 4-term formula
- Use 1-indexing to avoid boundary checks

**Why It Works:**
```
prefix[i][j] = sum of rectangle from (0,0) to (i,j)

To get sum from (r1,c1) to (r2,c2):
  Include: prefix[r2][c2]
  Exclude: above + left
  Add back: corner (was subtracted twice)
```

**WATCH VIDEO BEFORE SOLVING!**

**Foundation for all 2D prefix sum problems**

**Time Estimate:** 35 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 17: Matrix Block Sum (LC 1314)</b> 🟡 Medium</summary>

**Link:** https://leetcode.com/problems/matrix-block-sum/

**Pattern:** 2D Prefix Sum application

**Description:** `answer[i][j]` = sum of elements in k-neighbor block around (i,j)

**Key Concept:**
- Build 2D prefix sum
- For each (i,j), query rectangle from (i-k, j-k) to (i+k, j+k)
- Handle boundaries: `max(0, i-k)`, `min(m-1, i+k)`

**Shows practical application of Template 3**

**Time Estimate:** 40 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 18: Submatrices Sum = Target (LC 1074)</b> 🔴 Hard</summary>

**Link:** https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/

**Pattern:** 2D Prefix + HashMap (2D→1D reduction)

**Description:** Count non-empty submatrices with sum = target

**Key Technique: 2D → 1D Reduction**
```
For each row pair (r1, r2):
  Compress columns to 1D array
  Apply 1D prefix sum + HashMap
  
This reduces 2D problem to multiple 1D problems!
```

**Key Concept:**
- Fix top and bottom rows
- For columns, treat as 1D array
- Use Template 2 (prefix + HashMap) on columns

**CRITICAL technique for 2D subarray problems**

**Time Estimate:** 50 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 19: Max Sum Rectangle ≤ K (LC 363)</b> 🔴 Hard</summary>

**Link:** https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/

**Pattern:** 2D Prefix + Ordered Set

**Description:** Find max sum of rectangle with sum ≤ k

**Key Technique:**
- Same 2D→1D reduction as Problem 18
- But need ordered set (TreeSet/multiset) for range search
- Need `currSum - x ≤ k` → find `x ≥ currSum - k` using `lower_bound`

**Combines:**
- 2D→1D reduction
- Prefix sum on 1D
- Binary search on prefix sums

**Advanced problem combining multiple techniques**

**Time Estimate:** 60 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 20: Count Square Submatrices (LC 1277)</b> 🟡 Medium</summary>

**Link:** https://leetcode.com/problems/count-square-submatrices-with-all-ones/

**Pattern:** 2D Prefix Sum OR DP (both work)

**Description:** Count square submatrices having all ones

**Approach 1 (2D Prefix):**
- Build prefix sum
- For each possible square, check if sum = size²
- If yes, all cells are 1

**Approach 2 (DP - More Efficient):**
- `dp[i][j]` = size of largest square ending at (i,j)
- Each cell contributes `dp[i][j]` squares

**Try both approaches to understand trade-offs!**

**Time Estimate:** 40 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 21: Maximal Square (LC 221)</b> 🟡 Medium</summary>

**Link:** https://leetcode.com/problems/maximal-square/

**Pattern:** 2D Prefix Sum OR DP

**Description:** Find largest square containing only 1s

**Key Concept:**
- Similar to Problem 20 but find MAX instead of count
- DP approach: `dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1`
- Track maximum size seen

**Good follow-up to Problem 20**

**Time Estimate:** 35 minutes

**Status:** [ ] Solved

---
</details>

---

## 🚦 SUB-PATTERN 5.4: Difference Array (Range Updates)

**Focus:** Efficient range updates, batch processing  
**Duration:** 1 day  
**Total Problems:** 4

---

### 📚 Prerequisites (Complete BEFORE solving)

**📺 Watch:**
- **[Difference Array - William Fiset](https://www.youtube.com/watch?v=h4zNvA4lbtc)** `12 min`
  - *Covers:* Concept, range updates in O(1)
  - *Key Idea:* Opposite of prefix sum

**📄 Read:**
- **[Difference Array - GeeksforGeeks](https://www.geeksforgeeks.org/difference-array-range-update-query-o1/)**
  - *Focus:* When to use vs prefix sum

---

### 🛠️ Template 4: Difference Array
```cpp
// O(1) per update | O(n) final build
class DifferenceArray {
    vector<int> diff;
    int n;
public:
    DifferenceArray(int size) : n(size) {
        diff.resize(n + 1, 0);
    }
    
    // Add 'val' to range [L, R] in O(1)
    void rangeUpdate(int L, int R, int val) {
        diff[L] += val;
        if(R + 1 < n) {
            diff[R + 1] -= val;
        }
    }
    
    // Build final array after all updates
    vector<int> getArray() {
        vector<int> result(n);
        result[0] = diff[0];
        for(int i = 1; i < n; i++) {
            result[i] = result[i-1] + diff[i];
        }
        return result;
    }
};
```

**How it works:**
```
Update [L, R] += val:
  diff[L] += val      // Start adding from L
  diff[R+1] -= val    // Stop adding after R

Build result:
  result[i] = result[i-1] + diff[i]  (prefix sum of diff)

The diff array records WHERE changes happen!
```

**When to use:**
- Multiple range updates needed
- Each update should be O(1)
- Final array needed after all updates
- Booking/reservation problems

---

### ⚔️ Problems (4)

| # | Problem | Difficulty | Pattern | Time | Status |
|---|---------|-----------|---------|------|--------|
| 22 | [Range Addition (LC 370)](https://leetcode.com/problems/range-addition/) | 🟡 Medium | Template 4 ⭐ Pure | 30 min | [ ] |
| 23 | [Corporate Flight Bookings (LC 1109)](https://leetcode.com/problems/corporate-flight-bookings/) | 🟡 Medium | Difference Array | 30 min | [ ] |
| 24 | [Car Pooling (LC 1094)](https://leetcode.com/problems/car-pooling/) | 🟡 Medium | Diff Array + Capacity | 35 min | [ ] |
| 25 | [Brightest Position (LC 2021)](https://leetcode.com/problems/brightest-position-on-street/) | 🟡 Medium | Diff Array + Find Max | 35 min | [ ] |

<details>
<summary><b>Problem 22: Range Addition (LC 370)</b> 🟡 Medium [PREMIUM] ⭐ Pure</summary>

**Link:** https://leetcode.com/problems/range-addition/

**Pattern:** Difference Array (Template 4) - Pure application

**Description:** Apply multiple range updates [L, R] += val, return final array

**Note:** Premium problem - skip if no access

**Key Concept:**
- Apply all updates to difference array: O(1) each
- Build final array once at end: O(n)
- Total: O(k + n) where k = number of updates

**Pure difference array - no variations**

**Time Estimate:** 30 minutes

**Status:** [ ] Solved / [ ] Skipped (Premium)

---
</details>

<details>
<summary><b>Problem 23: Corporate Flight Bookings (LC 1109)</b> 🟡 Medium</summary>

**Link:** https://leetcode.com/problems/corporate-flight-bookings/

**Pattern:** Difference Array

**Description:** `bookings[i] = [first, last, seats]`: add seats to flights first through last

**Key Concept:**
- Convert to 0-indexed: `first-1, last-1`
- Apply difference array: `diff[first] += seats`, `diff[last+1] -= seats`
- Build final result using prefix sum of diff

**Classic difference array problem**

**Time Estimate:** 30 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 24: Car Pooling (LC 1094)</b> 🟡 Medium</summary>

**Link:** https://leetcode.com/problems/car-pooling/

**Pattern:** Difference Array with capacity check

**Description:** `trips[i] = [passengers, from, to]`. Check if car with capacity can handle all trips

**Key Concept:**
- Apply difference array for each trip
- Passengers board at `from`: `diff[from] += passengers`
- Passengers leave at `to`: `diff[to] -= passengers` (NOT to+1!)
- Build running total and check if any point exceeds capacity

**Difference from template:**
- Passengers leave AT location `to`, not after

**Time Estimate:** 35 minutes

**Status:** [ ] Solved

---
</details>

<details>
<summary><b>Problem 25: Brightest Position (LC 2021)</b> 🟡 Medium</summary>

**Link:** https://leetcode.com/problems/brightest-position-on-street/

**Pattern:** Difference Array + find maximum

**Description:** `lights[i] = [position, range]`: light illuminates [position-range, position+range]. Find brightest position.

**Key Concept:**
- Use map instead of array (sparse positions, large range)
- `diff[pos - range] += 1`
- `diff[pos + range + 1] -= 1`
- Find position with maximum cumulative brightness

**Shows difference array with map for sparse/large ranges**

**Time Estimate:** 35 minutes

**Status:** [ ] Solved

---
</details>

---

## 📅 6-DAY STUDY PLAN

### **Day 1 (Day 56): Basic Prefix Sum (5.1)**
**Morning (2 hours):**
- [ ] Watch: Prefix Sum Array video (18 min)
- [ ] Read: Prefix Sum Array article (20 min)
- [ ] Study Template 1 (15 min)
- [ ] Solve Problems 1-2 (40 min)

**Afternoon (2 hours):**
- [ ] Solve Problems 3-5 (45 min)
- [ ] Write Template 1 from memory (15 min)
- [ ] Review: When to use prefix sum vs brute force

**Goal:** Understand prefix sum construction and basic queries

---

### **Day 2 (Day 57): Prefix Sum + HashMap - Foundation (5.2 Part 1)**
**Morning (3 hours):**
- [ ] Watch: Subarray Sum Equals K video (15 min) ⭐ CRITICAL
- [ ] Watch: Subarray Problems video (25 min)
- [ ] Study Template 2 deeply (30 min)
- [ ] Solve Problem 6 (CRITICAL - 60 min)

**Afternoon (2 hours):**
- [ ] Solve Problems 7-8 (80 min)
- [ ] Review why HashMap works (20 min)

**Goal:** Master the core prefix sum + HashMap technique

---

### **Day 3 (Day 58): Prefix Sum + HashMap - Applications (5.2 Part 2)**
**All Day (5-6 hours):**
- [ ] Solve Problems 9-12 (3 hours)
- [ ] Focus on transformations (converting to sum problems)
- [ ] Practice Template 2 variations (1 hour)
- [ ] Write Template 2 from memory (30 min)

**Goal:** Comfortable with various applications and transformations

---

### **Day 4 (Day 59): Prefix Sum + HashMap - Advanced (5.2 Part 3)**
**All Day (5-6 hours):**
- [ ] Solve Problems 13-15 (4-5 hours)
- [ ] These are harder - take hints after 40 min if stuck
- [ ] Understand how to modify template for different problems
- [ ] Review all 10 problems from 5.2

**Goal:** Handle complex variations of the pattern

---

### **Day 5 (Day 60): 2D Prefix Sum (5.3)**
**Morning (3 hours):**
- [ ] Watch: 2D Prefix Sums video (20 min) ⭐ CRITICAL
- [ ] Read: Submatrix Sum article (30 min)
- [ ] Study Template 3 (20 min)
- [ ] Solve Problem 16 (FOUNDATION - 60 min)

**Afternoon (3 hours):**
- [ ] Solve Problems 17-19 (3 hours)
- [ ] Practice 2D prefix sum formula
- [ ] Understand 2D→1D reduction technique

**Goal:** Master 2D prefix sum and reduction technique

---

### **Day 6 (Day 61): Advanced 2D + Difference Array (5.3 + 5.4)**
**Morning (3 hours):**
- [ ] Solve Problems 20-21 (2 hours)
- [ ] Watch: Difference Array video (12 min)
- [ ] Study Template 4 (20 min)

**Afternoon (3 hours):**
- [ ] Solve Problems 22-25 (3 hours)
- [ ] Review all 4 templates

**Evening (1 hour):**
- [ ] Write all templates from memory
- [ ] Review weak areas

**Goal:** Complete pattern, solidify all techniques

---

## 🎯 SUCCESS CRITERIA

You've mastered Prefix Sum when:
- ✅ Solved at least 20/25 problems (80%)
- ✅ Can write all 4 templates from memory WITHOUT looking
- ✅ **Mastered Template 2** (Prefix Sum + HashMap) - MOST IMPORTANT
- ✅ Can solve Problem 6 (Subarray Sum = K) optimally in under 30 minutes
- ✅ Understand when to use each template
- ✅ Comfortable with 2D→1D reduction technique
- ✅ Know difference array for range updates

**Critical Problems (MUST SOLVE):**
- [ ] Problem 6: Subarray Sum Equals K ⭐⭐⭐
- [ ] Problem 7: Continuous Subarray Sum
- [ ] Problem 8: Subarray Sums Divisible by K
- [ ] Problem 9: Contiguous Array
- [ ] Problem 16: Range Sum Query 2D
- [ ] Problem 18: Submatrices Sum = Target

---

## 📊 PROBLEM DIFFICULTY DISTRIBUTION

**By Difficulty:**
- 🟢 Easy: 5 problems (20%) - Build confidence, understand basics
- 🟡 Medium: 18 problems (72%) - Core interview level ⭐
- 🔴 Hard: 2 problems (8%) - Advanced applications

**By Sub-Pattern:**
- 5.1 Basic Prefix: 5 problems (all easy)
- 5.2 Prefix + HashMap: 10 problems (all medium) ⭐ **MOST IMPORTANT**
- 5.3 2D Prefix: 6 problems (4 medium + 2 hard)
- 5.4 Difference Array: 4 problems (all medium)

**This distribution ensures 72% medium practice - perfect for interviews!**

---

## ✅ CRITICAL REMINDERS

### Before Starting Each Problem:
1. ❓ "Is this really a prefix sum problem?"
2. ❓ "Which template applies?"
3. ❓ "Do I need HashMap or just array?"
4. ❓ "Is there a transformation needed?"

### Common Mistakes to Avoid:
- ❌ Forgetting `map[0] = 1` in Template 2
- ❌ Adding to map BEFORE checking (Template 2)
- ❌ Not handling negative remainders: `((sum % k) + k) % k`
- ❌ In 2D prefix, getting indices wrong (off-by-one errors)
- ❌ In difference array, forgetting to mark `end + 1`

### When Stuck:
- **After 30 min:** Review the template
- **After 40 min:** Check if using the right pattern
- **After 50 min:** Take ONE hint from editorial
- **After 60 min:** Read solution, understand, then re-code from memory

### Pattern Recognition Quick Guide:
| Keyword | Template |
|---------|----------|
| "Subarray sum = K" | Template 2 (Prefix + HashMap) |
| "Multiple range queries" | Template 1 (Basic Prefix) |
| "Rectangle sum" | Template 3 (2D Prefix) |
| "Multiple range updates" | Template 4 (Difference Array) |
| "Divisible by K" | Template 2 with modulo |
| "Equal 0s and 1s" | Template 2 with transformation |

---

## 🚀 START NOW!

**Your first steps:**
1. ⏰ Watch: Prefix Sum Array video (18 min)
2. 📖 Read: Prefix Sum Array article (20 min)
3. 💻 Solve: Problem 1 - Range Sum Query (20 min)

**After completing each sub-pattern, tell me:**
- "Completed Sub-Pattern 5.1, ready for 5.2!"
- "Completed Sub-Pattern 5.2, ready for 5.3!"
- etc.

**After completing ALL 25 problems, tell me:**
- "Completed Prefix Sum pattern, solved X/25 problems!"

**Then we move to:** Pattern 3 (Two Pointers) OR Pattern 4 (Sliding Window)

---

## 💪 REMEMBER

- Template 2 (Prefix Sum + HashMap) is used in **80% of subarray interview questions**
- Master Problem 6 (Subarray Sum = K) - it's THE foundation
- 2D→1D reduction is a powerful technique for matrix problems
- Difference array is the opposite of prefix sum (updates vs queries)

**LET'S MASTER PREFIX SUM!** 🔥

---

*Created: Day 55 - After completing Arrays & Hashing*  
*Duration: 6 days (Days 56-61)*  
*Next Pattern: Two Pointers (Pattern 3) OR Sliding Window (Pattern 4)*