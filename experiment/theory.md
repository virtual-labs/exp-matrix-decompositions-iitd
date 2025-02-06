**Properties of Matrix Operations**

**Properties of Addition**

The basic properties of addition for real numbers also hold true for
matrices. 

Let A, B and C be m x n matrices

1.  A + B  =  B + A    commutative

2.  A + (B + C)  =  (A + B) + C    associative

3.  There is a unique m x n matrix O with\
    \
            A + O  =  A        additive identity

4.  For any  m x n matrix A there is an m x n matrix B (called -A) with\
    \
           A + B  =  O        additive inverse

**Properties of Matrix ****Multiplication**

Unlike matrix addition, the properties of multiplication of real numbers
do not all generalize to matrices.  Matrices rarely commute even
if AB and BA are both defined.  There often is no multiplicative inverse
of a matrix, even if the matrix is a square matrix.  There are a few
properties of multiplication of real numbers that generalize to
matrices.  We state them now.

Let A, B and C be matrices of dimensions such that the following are
defined.  Then

1.  A(BC)  =  (AB)C                 associative

2.  A(B + C)  =  AB + AC        distributive

3.  (A + B)C  =  AC + BC        distributive

4.  There are unique matrices I~m~ and I~n~ with\
    \
            I~m~ A  =  A I~n~  =  A        multiplicative identity

**Properties of ****Scalar Multiplication**

Since we can multiply a matrix by a scalar, we can investigate the
properties that this multiplication has.  All of the properties of
multiplication of real numbers generalize.  In particular, we have

Let r and s be real numbers and A and B be matrices.  Then

1.  r(sA)  =  (rs)A

2.  (r + s)A  =  rA + sA

3.  r(A + B)  =  rA + rB

4.  A(rB)  =  r(AB)  =  (rA)B

**Properties of the ****Transpose of a Matrix**

Recall that the transpose of a matrix is the operation of switching rows
and columns.  We state the following properties.  We proved the first
property in the last section.

Let r be a real number and A and B be matrices.  Then

1.  (A^T^)^T^  =  A

2.  (A + B)^T^  =  A^T^ + B^T^

3.  (AB)^T^  =  B^T^A^T^

4.  (rA)^T^  =  rA^T^

**Properties of Determinants**

1.  **det(A) =  det(A^T^)**

2.  If any row or column of a determinant, is multiplied by any scalar
    value, that is, a non-zero constant, the entire determinant gets
    multiplied by the same scalar, that is, if any row or column is
    multiplied by constant k, the determinant value gets multiplied by
    k.

**det(Δ') = k det(Δ)**

3.  If all elements of any column or row are zero, then the determinant
    is zero

4.  If all the elements in the determinant above or below the diagonal
    are zero, then the determinant is a product of diagonal elements

**Minor, Co-factor, Adjoint, Inverse**

> \[A\]~(i\ x\ k)~ **.** \[B\]~(k\ x\ j)~
>
> =$\begin{bmatrix}
> a11 & \cdots & a1n \\
> a21 & .\ .. & a2n \\
>  \vdots & \ddots & \vdots \\
> an1 & \cdots & ann
> \end{bmatrix}\begin{bmatrix}
> b11 & \cdots & b1n \\
> b21 & .\ .. & b2n \\
>  \vdots & \ddots & \vdots \\
> bn1 & \cdots & bnn
> \end{bmatrix}$
>
> =$\begin{bmatrix}
> c11 & \cdots & c1n \\
> c21 & .\ .. & c2n \\
>  \vdots & \ddots & \vdots \\
> cn1 & \cdots & cnn
> \end{bmatrix}$ = \[C\]~ij~
>
> Where, c~ij~ = $\sum_{1}^{k}{}$ a~ik~b~kj~
>
> C^T^ = $\begin{bmatrix}
> c11 & \cdots & cn1 \\
> c12 & .\ .. & cn2 \\
>  \vdots & \ddots & \vdots \\
> c1n & \cdots & cnn
> \end{bmatrix}$ = \[C\]~ji~
>
> Where, C^T^ is transpose of matrix C
>
> **1. a.)**
>
> **(A.B)^T^ = B^T^.A^T^**
>
> (A.B)^T^~ij~
>
> = (A.B)~ji~
>
> = a~jk~b~ki~
>
> = b~ki~a~jk~
>
> = (b^T^ )~ik~ (a^T^)~kj~
>
> = (B^T^A^T^)~ij~
>
> **(1. b.)**
>
> **B^T^.A^T^ = (A.B)^T^**
>
> (B^T^A^T^)~ij~
>
> = (b^T^)~ik\ .~ (a^T^)~kj~
>
> = (b)~ki\ .~ (a)~jk~
>
> = (a)~jk~ . (b)~ki~
>
> = (AB)~ji~
>
> = (AB)^T^~ij~
>
> Cofactor Matrix of a matrix A
>
> \[CO~ij~\] = (-1)^(i+j)^ \*$\begin{bmatrix}
> M11 & \cdots & M1n \\
> M21 & .\ .. & M2n \\
>  \vdots & \ddots & \vdots \\
> Mn1 & \cdots & Mnn
> \end{bmatrix}$
>
> Where, $\begin{bmatrix}
> M11 & \cdots & M1n \\
> M21 & .\ .. & M2n \\
>  \vdots & \ddots & \vdots \\
> Mn1 & \cdots & Mnn
> \end{bmatrix}\ is\ minor\ matrix\ of\ A$
>
> M~ij~ is the entry in the i^th^ row and j^th^ column
>
> Adjoint of a matrix, A
>
> Adj(A) = \[CO~ij~\]^T^
>
> Now, the inverse of the matrix A
>
> A^-1^ = Adj(A) / det(A)
>
> Where 'det' denotes the determinant
>
> **2. (AB)^−1^=B^−1^A^−1^**
>
> If A and B are invertible matrices or Both A and B are **n X n**
> square matrices and determinants are not zeroes then
>
> (AB)(AB)^-1^ = I
>
> Where I is the identity matrix of size **n X n**
>
> Pre-multiply by A^-1^
>
> (A^-1^ ). (AB)(AB)^-1^ = A^-1^I
>
> Or, I.(B).(AB)^-1^ = A^-1^
>
> Or, (B).(AB)^-1^ = A^-1^
>
> Pre-multiply by B^-1^
>
> (B^-1^ ). (B).(AB)^-1^ = B^-1^A^-1^
>
> Or, I(AB)^-1^ = B^-1^A^-1^
>
> Or, (AB)^-1^ = B^-1^A^-1^
>
> **3. Adj(A . B) = Adj(B) . Adj(A)**
>
> (AB)^−1^=adj(AB)/det(AB)
>
> Or, adj(AB) = (AB)^−1^⋅det(AB) . . . (1)
>
> It is also known that, (AB)^−1^=B^-1^A^−1^
>
> And, det(AB)=det(A)⋅det(B) . . . (2)
>
> Also
>
> A^−1^=adj(A)/det(A)
>
> B^−1^=adj(B)/det(B)
>
> Or, adj(A)=A^-1^det(A)
>
> Or, adj(B)=B^−1^det(B)
>
> adj(B)⋅adj(A)=detA⋅detB⋅B^−1^⋅A^−1^ . . . (3)
>
> Putting (2) in equation (1)
>
> adj(AB)=det(A)⋅det(B)⋅B^−1^⋅A^−1^ . . . (4)
>
> From (3) and (4)
>
> adj(AB)=adj(B)⋅adj(A)

**Eigenvalue and Eigenvector**

Let's assume a square matrix **A**

The characteristic equation,

**\| A --** λ\***I \| =** 0

*(where **I** is an identity matrix)*

After calculating the values of λs we attempt to find eigenvectors for
corresponding eigenvalues like this

For eigenvalue, λ = λ~1~

**A\*x** = λ~1~\***I\*x** *(where, **x** is an unknown vector)*

Or, (**A** - λ~1~\***I**)\***x** = 0

The value of **x** is the corresponding eigenvector of λ~1~

**Power Method for Dominant Eigenvalue**

Let λ~1~, λ~2~, λ~3~, and λ~n~ be the eigenvalues of an **n X n** matrix
**A**. λ~1~ is called the dominant eigenvalue of **A** if

\| λ~1~\| \> \| λ~i~ \|, *i = 2, 3, \... , n*

The eigenvectors corresponding to λ~1~ are called dominant eigenvectors
of **A**.

**Procedure**

1.  Choose an **n X n** matrix

***The number of rows and columns should be the same (or matrix
dimension mismatched)***

2.  Like the Jacobi and Gauss-Seidel methods, the power method for
    approximating eigenvalues is iterative. First, we assume that matrix
    **A** has a dominant eigenvalue with corresponding dominant
    eigenvectors. Then we choose an initial approximation **x~0~** of
    one of the

dominant eigenvectors of **A**. This initial approximation must be a
nonzero vector in R*^n^*

Finally, we form the sequence given by

**x~1~ = Ax~0~**

**x~2~ = Ax~1~ = A(Ax~0~) = A^2^x~0~**

**x~3~ = Ax~2~ = A(A^2^x~0~) = A^3^x~0~**

**~.\ .\ .~**

**x~n~ = Ax~n-1~ = A(A^n-1^x~0~) = A^n^x~0~**

*(In the above, **x~1\ ~**denotes the value of vector **x** at the first
iteration and so on)*

Compare the updated value of **x** with its previous value (obtained
from the previous iteration)

For large powers of k, and by properly scaling this sequence, we will
see that we obtain a good approximation of the dominant eigenvector of
**A**.

3.  Repeat the iteration process until convergence

4.  **The formula for finding the corresponding eigenvalue from
    eigenvector x.**

If **x** is an eigenvector of **A**, then its corresponding eigenvalue
is given by

λ = (**Ax.x / x.x**)

5.  If they do not converge even after many iterations (maybe after 1000
    iterations), then

***Entered matrix has no dominant eigenvalue***

**Example**

A = $\begin{bmatrix}
2 & - 12 \\
1 & - 5
\end{bmatrix}$

We begin with an initial nonzero approximation of

**x~0~** = $\begin{bmatrix}
1 \\
1
\end{bmatrix}$

We then obtain the following approximations

**x~1~ = Ax~0~ =** $\begin{bmatrix}
2 & - 12 \\
1 & - 5
\end{bmatrix}\begin{bmatrix}
1 \\
1
\end{bmatrix}$ = $\begin{bmatrix}
 - 10 \\
 - 4
\end{bmatrix}$ = -4$\begin{bmatrix}
2.50 \\
1.00
\end{bmatrix}$

**x~2~ = Ax~1~ =** $\begin{bmatrix}
2 & - 12 \\
1 & - 5
\end{bmatrix}\begin{bmatrix}
 - 10 \\
 - 4
\end{bmatrix}$ = $\begin{bmatrix}
28 \\
10
\end{bmatrix}$ = 10$\begin{bmatrix}
2.80 \\
1.00
\end{bmatrix}$

**x~3~ = Ax~2~ =** $\begin{bmatrix}
2 & - 12 \\
1 & - 5
\end{bmatrix}\begin{bmatrix}
28 \\
10
\end{bmatrix}$ = $\begin{bmatrix}
 - 64 \\
 - 22
\end{bmatrix}$ = -22$\begin{bmatrix}
2.91 \\
1.00
\end{bmatrix}$

**x~4~ = Ax~3~ =** $\begin{bmatrix}
2 & - 12 \\
1 & - 5
\end{bmatrix}\begin{bmatrix}
 - 64 \\
 - 22
\end{bmatrix}$ = $\begin{bmatrix}
136 \\
46
\end{bmatrix}$ = 46$\begin{bmatrix}
2.96 \\
1.00
\end{bmatrix}$

**x~5~ = Ax~4~ =** $\begin{bmatrix}
2 & - 12 \\
1 & - 5
\end{bmatrix}\begin{bmatrix}
136 \\
46
\end{bmatrix}$ = $\begin{bmatrix}
 - 280 \\
 - 94
\end{bmatrix}$ = -94$\begin{bmatrix}
2.98 \\
1.00
\end{bmatrix}$

**x~6~ = Ax~5~ =** $\begin{bmatrix}
2 & - 12 \\
1 & - 5
\end{bmatrix}\begin{bmatrix}
 - 280 \\
 - 94
\end{bmatrix}$ = $\begin{bmatrix}
568 \\
190
\end{bmatrix}$ = 190$\begin{bmatrix}
2.99 \\
1.00
\end{bmatrix}$

Note that the approximations in Example appear to be approaching scalar
multiples of $\begin{bmatrix}
3 \\
1
\end{bmatrix}$

So, the obtained dominant eigenvector from the above iterations is

**x** = $\begin{bmatrix}
3 \\
1
\end{bmatrix}$

Now, we'll find the corresponding eigenvalue from the obtained
eigenvector

**Formula**

If **x** is an eigenvector of **A**, then its corresponding eigenvalue
is given by

λ = (**Ax.x / x.x**)

**Ax** = $\begin{bmatrix}
2 & - 12 \\
1 & - 5
\end{bmatrix}\begin{bmatrix}
2.99 \\
1.00
\end{bmatrix}$ = $\begin{bmatrix}
 - 6.02 \\
 - 2.01
\end{bmatrix}$

Then, **Ax.x =** $\begin{bmatrix}
 - 6.02 \\
 - 2.01
\end{bmatrix}\begin{bmatrix}
2.99 \\
1.00
\end{bmatrix}$ = -20.0 (approx.)

And **x.x** = $\begin{bmatrix}
2.99 \\
1.00
\end{bmatrix}\begin{bmatrix}
2.99 \\
1.00
\end{bmatrix}$ = $\begin{bmatrix}
2.99 \\
1.00
\end{bmatrix}$ = 9.94 (approx.)

So, the corresponding eigenvalue, λ = (-20.0 / 9.94) = -2 (approx.)

**Singular Value Decomposition (SVD)**

**Theory:**

Singular Value Decomposition (SVD) is a matrix factorization technique
that decomposes any m×n matrix A into three matrices: A=UΣV^T^

Where:

-   U is an m×m orthogonal matrix (or unitary if complex).

-   Σ is m×n diagonal matrix with non-negative real numbers on the
    diagonal (singular values).

-   V^T^ is an n×n orthogonal matrix (or unitary if complex), and V^T^
    is the transpose of V.

**Example**

A = $\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}$

Compute A^T^A and AA^T^

A^T^A = $\begin{bmatrix}
1 & 3 \\
2 & 4
\end{bmatrix}\ \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}$ = $\begin{bmatrix}
10 & 14 \\
14 & 20
\end{bmatrix}$

AA^T^ = $\ \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}\begin{bmatrix}
1 & 3 \\
2 & 4
\end{bmatrix}$ = $\begin{bmatrix}
5 & 11 \\
11 & 25
\end{bmatrix}$

**Find Eigenvalues and Eigenvectors**:

For A^T^A:

-   Eigenvalues are λ1= 29.8661 and λ2 = 0.1339

-   Corresponding eigenvectors (normalized) are v1 = $\begin{bmatrix}
     - 0.5760 \\
     - 0.8174
    \end{bmatrix}\ $and v2 = $\begin{bmatrix}
    0.8174 \\
     - 0.5760
    \end{bmatrix}$

For AA^T^:

-   Eigenvalues are λ1= 29.8661 and λ2 = 0.1339

-   Corresponding eigenvectors (normalized) are u1 = $\begin{bmatrix}
     - 0.4046 \\
     - 0.9145
    \end{bmatrix}\ $and u2 = $\begin{bmatrix}
    0.9145 \\
     - 0.4046
    \end{bmatrix}$

**Compute Singular Values**:

Singular values are σ1 = √ 29.8661= 5.4650

And σ1 = √ 0.1339 = 0.3660

**Final SVD:**

A=UΣV^T^

Where:

U = $\begin{bmatrix}
 - 0.4046 & 0.9145 \\
 - 0.9145 & - 0.4046
\end{bmatrix};$ Σ = $\begin{bmatrix}
5.4650 & 0 \\
0 & 0.3660
\end{bmatrix};$

V^T^ = $\begin{bmatrix}
 - 0.5760 & - 0.8174 \\
0.8174 & - 0.5760
\end{bmatrix}$

**LU Decomposition**

LU Decomposition is a method to find solutions of linear equations.

Using Gauss Elimination Method

Consider a matrix **𝐴**. If all entries below the diagonal entries are
zero, then the matrix is called "upper triangular." If all entries above
the diagonal entries are zero, then the matrix is called "lower
triangular."

And **A = L\*U**

**L** =$\ \begin{bmatrix}
u11 & 0 & 0 & 0 \\
u21 & u22 & 0 & 0 \\
u31 & u32 & u33 & 0 \\
u41 & u42 & u43 & u44
\end{bmatrix}$ ; **U** = $\begin{bmatrix}
l11 & l12 & l13 & l14 \\
0 & l22 & l23 & l24 \\
0 & 0 & l33 & 9 \\
0 & 0 & 0 & l44
\end{bmatrix}$

***L= lower triangular matrix; U= upper triangular matrix***

**Procedure-**

1.  Choose a matrix (**m X n)** (e.g., 3X 3, 3 X 4, 4 X 4, etc.,)

2.  Initialize the **L** and **U** matrices. For L matrix, take a matrix
    with all diagonal elements assigned to 1, and the remaining
    components are zero. L matrix size will be (**m X m**).

3.  Consider the **U** matrix\'s elements to be same to those of the
    **A** matrix. So, size of matrix **U** will be as same as matrix
    **A**.

4.  4\. Next, execute row operations on the **U** matrix to make sure
    that all of the components below the diagonal are zeroes. For
    instance, to make an element in row 2 or R2 at the (i,j)th position
    zero, we would first do

\"R2 - (-2)\*R1\"

and then set the value '(-2)' at the (i,j)th place of the L Matrix.

5.  For a given matrix

**A** = $\begin{bmatrix}
2 & 4 & 3 & 5 \\
 - 4 & - 7 & - 5 & - 8 \\
6 & 8 & 2 & 9 \\
4 & 9 & - 2 & 14
\end{bmatrix}$

**A=L\*U**

Or, **A**=$\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}\ $\* $\begin{bmatrix}
2 & 4 & 3 & 5 \\
 - 4 & - 7 & - 5 & - 8 \\
6 & 8 & 2 & 9 \\
4 & 9 & - 2 & 14
\end{bmatrix}$

***L= lower triangular matrix; U= upper triangular matrix***

After doing the row operation \"R2 - (-2)\*R1,\" we get,

Or, **A** = $\begin{bmatrix}
1 & 0 & 0 & 0 \\
 - 2 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}\ $\* $\begin{bmatrix}
2 & 4 & 3 & 5 \\
0 & 1 & 1 & 2 \\
6 & 8 & 2 & 9 \\
4 & 9 & - 2 & 14
\end{bmatrix}$

After row operation in matrix **U**, we\'ve set (-2) to the same place
of the **L** matrix and the (2, 1)^th^ position of the U matrix, which
is now zero.

Firstly, try the first column elements of matrix **U** below diagonal
elements to make zeroes,

After doing, 'R2-(-2)\*R1' *(as demonstrated above)*

'R3-(3)\*R1' and

'R4-(2)\*R1'

We get,

**A** = $\begin{bmatrix}
1 & 0 & 0 & 0 \\
 - 2 & 1 & 0 & 0 \\
3 & 0 & 1 & 0 \\
2 & 0 & 0 & 1
\end{bmatrix}\ $\* $\begin{bmatrix}
2 & 4 & 3 & 5 \\
0 & 1 & 1 & 2 \\
0 & - 4 & - 7 & - 6 \\
0 & 1 & - 9 & 2
\end{bmatrix}$

In a same way, we will now employ row operations to set the elements of
the second column of matrix **U** to zero.

Calculate, 'R3-(-4)\*R2' and

'R4-(1)\*R2'

We get,

**A** = $\begin{bmatrix}
1 & 0 & 0 & 0 \\
 - 2 & 1 & 0 & 0 \\
3 & - 4 & 1 & 0 \\
2 & 1 & 0 & 1
\end{bmatrix}\ $\* $\begin{bmatrix}
2 & 4 & 3 & 5 \\
0 & 1 & 1 & 2 \\
0 & 0 & - 3 & 2 \\
0 & 0 & - 9 & - 4
\end{bmatrix}$

Now, we\'ll apply row operations to convert the elements of the third
column of matrix **U** to zeroes.

Now calculate \"R4-(3)\*R2\"

We get,

**A** = $\begin{bmatrix}
1 & 0 & 0 & 0 \\
 - 2 & 1 & 0 & 0 \\
3 & - 4 & 1 & 0 \\
2 & 1 & 3 & 1
\end{bmatrix}\ $\* $\begin{bmatrix}
2 & 4 & 3 & 5 \\
0 & 1 & 1 & 2 \\
0 & 0 & - 3 & 2 \\
0 & 0 & 0 & - 4
\end{bmatrix}$

So,

**L** = $\begin{bmatrix}
1 & 0 & 0 & 0 \\
 - 2 & 1 & 0 & 0 \\
3 & - 4 & 1 & 0 \\
2 & 1 & 3 & 1
\end{bmatrix}\ $

**U** = $\begin{bmatrix}
2 & 4 & 3 & 5 \\
0 & 1 & 1 & 2 \\
0 & 0 & - 3 & 2 \\
0 & 0 & 0 & - 4
\end{bmatrix}$

6.  **Before showing the final result, all intermediate steps must be
    displayed.**

**Row Echelon Form**

A matrix is in row echelon form if

-   All rows consisting of only zeroes are at the bottom.

-   The leading entry (that is the left-most nonzero entry) of every
    nonzero row is to the right of the leading entry of every row above

-   Some texts add the condition that the leading coefficient must be 1
    while others regard this as reduced row echelon form

-   These two conditions imply that all entries in a column below a
    leading coefficient are zeros

**Procedure**

1.  Choose an m X n matrix

2.  All zero rows are at the bottom.

3.  Choose the leading entry in the first non-zero row and swap it with
    the first row if necessary. Or, the leading entry/element in the
    first row must be non-zero.

4.  Divide the first row by the leading entry so that the leading entry
    becomes 1.

5.  Use row operations to make all entries in the first column below the
    leading entry equal to 0.

6.  Repeat steps 3 through 5 for each subsequent row, working from top
    to bottom.

These conditions also imply that all entries in a column below a leading
coefficient are zeros

**Example**

Given matrix,

**A =** $\begin{bmatrix}
\mathbf{1} & \mathbf{- 2} & \mathbf{1} \\
\mathbf{1} & \mathbf{- 1} & \mathbf{2} \\
\mathbf{0} & \mathbf{- 2} & \mathbf{2}
\end{bmatrix}$

R2 ← R2 -- R1

$$\begin{bmatrix}
\mathbf{1} & \mathbf{- 2} & \mathbf{1} \\
\mathbf{0} & \mathbf{1} & \mathbf{1} \\
\mathbf{0} & \mathbf{- 2} & \mathbf{2}
\end{bmatrix}$$

R3 ← R3 + 2\*R2

$$\begin{bmatrix}
\mathbf{1} & \mathbf{- 2} & \mathbf{1} \\
\mathbf{0} & \mathbf{1} & \mathbf{1} \\
\mathbf{0} & \mathbf{0} & \mathbf{4}
\end{bmatrix}$$

R3 ← R3 / 4

$$\begin{bmatrix}
\mathbf{1} & \mathbf{- 2} & \mathbf{1} \\
\mathbf{0} & \mathbf{1} & \mathbf{1} \\
\mathbf{0} & \mathbf{0} & \mathbf{1}
\end{bmatrix}$$

**Reduced Row Echelon Form (RREF)**

**Procedure**

1.  Choose an m X n matrix

2.  All zero rows are at the bottom.

3.  Choose the leading entry in the first non-zero row and swap it with
    the first row if necessary.

4.  Divide the first row by the leading entry so that the leading entry
    becomes 1.

5.  Use row operations to make all entries in the first column above and
    below the leading entry equal to 0.

6.  Repeat steps 3 through 5 for each subsequent row, working from top
    to bottom.

7.  After all, rows have been processed, the matrix is in reduced row
    echelon form.

**Example:**

Given matrix **A** = $\begin{bmatrix}
1 & 2 & 3 \\
2 & 5 & 7 \\
3 & 6 & 10
\end{bmatrix}$

R2 ← R2 -- 2\*R1 *(R1 denotes row 1 and so on)*

$$\begin{bmatrix}
1 & 2 & 3 \\
0 & 1 & 1 \\
3 & 6 & 10
\end{bmatrix}$$

R3 ← R3 -- 3\*R1

$$\begin{bmatrix}
1 & 2 & 3 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{bmatrix}$$

R1 ← R1 -- 2\*R2

$$\begin{bmatrix}
1 & 0 & 1 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{bmatrix}$$

R1 ← R1 -- R3

$$\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{bmatrix}$$

R2 ← R2 -- R3

$$\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}$$

**Rank of a Matrix**

**Theory:**

**Definition**: The rank of a matrix is defined as the maximum number of
linearly independent rows (or columns) in the matrix. It can also be
seen as the dimension of the row space or column space of the matrix.

**Rank of a Matrix in Row Echelon Form (REF)**

1.  **Row Echelon Form (REF)**: A matrix is in row echelon form when:

    -   All non-zero rows are above any rows of all zeros.

    -   The leading entry (pivot) of each non-zero row is to the right
        of the leading entry of the row above it.

    -   All entries below a pivot are zero.

2.  **Finding the Rank**:

    -   **Identify Non-Zero Rows**: In REF, the rank of the matrix is
        equal to the number of non-zero rows. This is because each
        non-zero row represents a linearly independent vector in the row
        space of the matrix.

    -   **Process**: Convert the matrix to REF using row operations (row
        swapping, scaling rows, adding/subtracting multiples of rows)
        and count the number of non-zero rows to determine the rank.

**Rank of a Matrix in Reduced Row Echelon Form (RREF)**

**Theory:**

1.  **Reduced Row Echelon Form (RREF)**: A matrix is in reduced row
    echelon form when:

    -   It is in row echelon form (REF).

    -   Each leading entry (pivot) is 1.

    -   Each leading 1 is the only non-zero entry in its column.

    -   All rows with leading 1s are above rows of all zeros.

2.  **Finding the Rank**:

    -   **Count Leading 1s**: In RREF, the rank of the matrix is equal
        to the number of leading 1s. Each leading 1 represents a pivot
        position in a linearly independent row.

    -   **Process**: Convert the matrix to RREF using row operations
        (pivoting, scaling, and clearing entries above and below pivots)
        and count the number of leading 1s to determine the rank.
