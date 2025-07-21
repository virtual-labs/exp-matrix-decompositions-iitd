<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
<!-- MathJax v3 CDN -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
		onload="renderMathInElement(document.body, {displayMode: false});"></script>

<style>
  .math-left {
	font-family: KaTeX_Main, serif;
	font-size: 1.1em;
	white-space: pre-wrap;
	text-align: left;
  }
</style>
</head>
<body>
      <div class="px-6 pb-6 flex-1">
        <div
          class="w-full text-[#007bff] font-normal text-[19.2px]"
          style="font-family: Raleway, sans-serif"
        ><p>In signal processing, basic matrices play crucial roles in various operations, forming the backbone of many algorithms and techniques. The identity matrix, a specific type of diagonal matrix, serves as a neutral element in matrix multiplication, crucial for preserving original signal values during transformations. Diagonal matrices streamline computations by allowing for independent scaling of signal components. Singular Value Decomposition (SVD) is a powerful tool in signal processing, extensively applied in noise reduction, data compression, and system identification. Matrix multiplication is fundamental in filtering, convolution, and applying linear transformations to signals, with convolution matrices specifically used to represent the effect of filters or kernels on signals.</p>
        <p>The Fourier matrix is essential for converting signals between time and frequency domains in signal processing. Transposition is used in forming cross-correlation matrices and working with orthogonal bases, like in PCA. Determinants help analyze system stability and calculate volumes in multivariate Gaussian distributions, while eigenvalue decomposition simplifies the representation of systems and signal energy distribution.</p>
        <p>LU decomposition is essential for solving linear equations, inverting matrices, and computing determinants. In signal processing, linear equations are crucial for various tasks, including filter design, system identification, and signal reconstruction. They are used to model and solve problems such as noise reduction, linear filtering, and Fourier transforms. Linear systems also underpin techniques like Principal Component Analysis (PCA) and Kalman filtering for estimation and prediction. Essentially, they provide the mathematical framework for manipulating and analyzing signals efficiently.</p>
        <p>Row echelon form is a fundamental tool in linear algebra that supports various signal processing applications by simplifying the analysis and solution of linear systems, determining matrix rank, etc.</p>
        <p>These foundational matrices enable efficient computation, representation, and manipulation of signals, serving as the building blocks for more complex signal processing tasks.</p>
        <br/>
<ul>
  <li><a href="https://virtual-labs.github.io/exp-matrix-decompositions-iitd/properties.html">1. Properties of Matrix Operations</a></li>
  <li><a href="https://virtual-labs.github.io/exp-matrix-decompositions-iitd/theory.html#minor">2. Minor, Cofactor, and Adjoint</a></li>
  <li><a href="https://virtual-labs.github.io/exp-matrix-decompositions-iitd/theory.html#ev">3. Eigenvalue and Eigenvector</a></li>
  <li><a href="https://virtual-labs.github.io/exp-matrix-decompositions-iitd/theory.html#svd">4. Singular Value Decomposition (SVD)</a></li>
  <li><a href="https://virtual-labs.github.io/exp-matrix-decompositions-iitd/theory.html#lu">5. LU Decomposition</a></li>
  <li><a href="https://virtual-labs.github.io/exp-matrix-decompositions-iitd/theory.html#ref">6. Row Echelon Form (REF)</a></li>
  <li><a href="https://virtual-labs.github.io/exp-matrix-decompositions-iitd/theory.html#rank">7. Rank of a Matrix</a></li>
    <li><a href="https://virtual-labs.github.io/exp-matrix-decompositions-iitd/theory.html#system">8. System of Linear Equations</a></li>
</ul>
        </div></div>
<br/>
  <h2 id = "properties">Properties of Matrix Operations</h2>
  <h2>Properties of Matrix Addition</h2>
  <p>The fundamental properties of real number addition also apply to matrices.</p>
  <p>Let \( A \), \( B \), and \( C \) be \( m \times n \) matrices:</p>
  <ol>
    <li><strong>Commutative Property</strong>: \( A + B = B + A \)</li>
    <li><strong>Associative Property</strong>: \( A + (B + C) = (A + B) + C \)</li>
    <li><strong>Additive Identity</strong>: There exists a unique \( m \times n \) zero matrix \( O \) such that \( A + O = A \)</li>
    <li><strong>Additive Inverse</strong>: For every matrix \( A \), there exists \( -A \) such that \( A + (-A) = O \)</li>
  </ol>
  <h2>Properties of Matrix Multiplication</h2>
  <p>Unlike addition, not all multiplication properties of real numbers apply to matrices.</p>
  <ul>
    <li>Matrix multiplication is <strong>not commutative</strong>: Even if both \( AB \) and \( BA \) are defined, they may not be equal.</li>
    <li>A matrix may not have a <strong>multiplicative inverse</strong>, even if it is square.</li>
  </ul>
  <p>However, some properties <strong>do generalize</strong>. Let \( A \), \( B \), and \( C \) be matrices such that the operations are defined:</p>
  <ol>
    <li><strong>Associative Property</strong>: \( A(BC) = (AB)C \)</li>
    <li><strong>Left Distributive Property</strong>: \( A(B + C) = AB + AC \)</li>
    <li><strong>Right Distributive Property</strong>: \( (A + B)C = AC + BC \)</li>
    <li><strong>Multiplicative Identity</strong>: \( I_m A = A \), \( A I_n = A \)</li>
  </ol>
  <h2>Properties of Scalar Multiplication</h2>
  <p>Let \( r \), \( s \) be real numbers, and \( A \), \( B \) be matrices:</p>
  <ol>
    <li>\( r(sA) = (rs)A \)</li>
    <li>\( (r + s)A = rA + sA \)</li>
    <li>\( r(A + B) = rA + rB \)</li>
    <li>\( A(rB) = r(AB) = (rA)B \) (if defined)</li>
  </ol>
  <h2>Properties of the Transpose of a Matrix</h2>
  <p>Let \( r \) be real, and \( A \), \( B \) be matrices:</p>
  <ol>
    <li>\( (A^T)^T = A \)</li>
    <li>\( (A + B)^T = A^T + B^T \)</li>
    <li>\( (AB)^T = B^T A^T \)</li>
    <li>\( (rA)^T = rA^T \)</li>
  </ol>
  <h2>Properties of Determinants</h2>
  <ol>
    <li>\( \det(A) = \det(A^T) \)</li>
    <li>If any row/column is multiplied by \( k \), then \( \det(\Delta') = k \cdot \det(\Delta) \)</li>
    <li>If a row or column is all zeros, then \( \det = 0 \)</li>
    <li>If matrix is upper/lower triangular, \( \det = \) product of diagonal elements</li>
  </ol>

<h2 id = "minor">Minor, Cofactor, Adjoint, and Inverse</h2>

<h2>Transpose of a Product</h2>

<h3>Proof that \( (AB)^T = B^T A^T \)</h3>
<p>The transpose of a product of two matrices equals the product of their transposes in reverse order. That is:</p>
<p>\( (AB)^T = B^T A^T \)</p>
<p>To see why this is true, consider the element at position \( (i, j) \) in \( (AB)^T \):</p>
<p>\( (AB)^T_{ij} = (AB)_{ji} = \sum_k a_{jk} \cdot b_{ki} \)</p>
<p>On the other hand, consider the element \( (i, j) \) in \( B^T A^T \):</p>
<p>\( (B^T A^T)_{ij} = \sum_k b^T_{ik} \cdot a^T_{kj} = \sum_k b_{ki} \cdot a_{jk} \)</p>
<p>Since both expressions are the same, we conclude:</p>
<p>\( (AB)^T = B^T A^T \)</p>

<h3>Reverse Direction \( B^T A^T = (AB)^T \)</h3>
<p>We can also prove this identity starting from the right-hand side:</p>
<p>\( (B^T A^T)_{ij} = \sum_k b^T_{ik} \cdot a^T_{kj} = \sum_k b_{ki} \cdot a_{jk} = (AB)_{ji} = (AB)^T_{ij} \)</p>

<h2>Minor, Cofactor and Adjoint</h2>

<h3>Minor Matrix</h3>
<p>The <strong>minor</strong> of the element in the \( i^{\text{th}} \) row and \( j^{\text{th}} \) column of a square matrix \( A \) is denoted by \( M_{ij} \) and defined as:</p>
<p>\( M_{ij} = \left| A_{ij} \right| \)</p>
<p>Where \( A_{ij} \) is the submatrix formed by deleting the \( i^{\text{th}} \) row and \( j^{\text{th}} \) column from the original matrix \( A \), and \( \left| A_{ij} \right| \) is its determinant.</p>

<h3>Cofactor Matrix</h3>
<p>The cofactor of the element in the \( i^{\text{th}} \) row and \( j^{\text{th}} \) column of a square matrix \( A \) is given by:</p>
<p>\( \text{CO}_{ij} = (-1)^{i+j} \cdot M_{ij} \)</p>
<p>Where \( M_{ij} \) is the <strong>minor</strong> of the element, i.e., the determinant of the submatrix formed by deleting the \( i^{\text{th}} \) row and \( j^{\text{th}} \) column from \( A \).</p>

<h3>Adjoint</h3>
<p>The adjoint (or adjugate) of a square matrix \( A \) is the transpose of the matrix of cofactors:</p>
<p>\( \text{Adj}(A) = [\text{CO}_{ij}]^T \)</p>

<h2>Inverse of a Matrix</h2>
<p>If matrix \( A \) is invertible (i.e., \( \det(A) \ne 0 \)), then the inverse of \( A \) is given by:</p>
<p>\( A^{-1} = \frac{\text{Adj}(A)}{\det(A)} \)</p>

<h2>Inverse of a Product</h2>
<p>The inverse of a product of two invertible matrices is the product of their inverses in reverse order:</p>
<p>\( (AB)^{-1} = B^{-1} A^{-1} \)</p>
<p><strong>Proof:</strong></p>
<p>Start with the identity:</p>
<p>\( (AB)(AB)^{-1} = I \)</p>
<p>Pre-multiply both sides by \( A^{-1} \):</p>
<p>\( A^{-1}(AB)(AB)^{-1} = A^{-1} \Rightarrow B(AB)^{-1} = A^{-1} \)</p>
<p>Now pre-multiply both sides by \( B^{-1} \):</p>
<p>\( B^{-1}B(AB)^{-1} = B^{-1}A^{-1} \Rightarrow (AB)^{-1} = B^{-1}A^{-1} \)</p>

<h2>Adjoint of a Product</h2>
<p>The adjoint of the product of two matrices equals the product of their adjoints in reverse order:</p>
<p>\( \text{Adj}(AB) = \text{Adj}(B) \cdot \text{Adj}(A) \)</p>

<p><strong>Why this works:</strong></p>
<p>From the inverse formula:</p>
<p>\( (AB)^{-1} = \frac{\text{Adj}(AB)}{\det(AB)} \)</p>
<p>We also have:</p>
<p>\( (AB)^{-1} = B^{-1} A^{-1} \), and \( \det(AB) = \det(A) \cdot \det(B) \)</p>
<p>Substitute the inverse formulas:</p>
<p>\( A^{-1} = \frac{\text{Adj}(A)}{\det(A)} \), and \( B^{-1} = \frac{\text{Adj}(B)}{\det(B)} \)</p>
<p>Multiply the adjoints accordingly:</p>
<p>\( \text{Adj}(B) \cdot \text{Adj}(A) = \det(A) \cdot \det(B) \cdot B^{-1} \cdot A^{-1} \)</p>
<p>Thus, from the original inverse formula:</p>
<p>\( \text{Adj}(AB) = \text{Adj}(B) \cdot \text{Adj}(A) \)</p>

<hr>
<h2 id = "ev">Eigenvalue Decomposition</h2>
<p>Eigenvalue decomposition expresses a matrix as a product of its eigenvectors and eigenvalues, enabling diagonalization and simplifying the analysis of matrix powers and system stability.</p>
<p>Let’s assume a square matrix \( A \).</p>

<p>The characteristic equation is:</p>
<div class="math-left">\( |A - \lambda I| = 0 \)</div>
<p>where \( I \) is the identity matrix and \( \lambda \) are eigenvalues.</p>

<p>For eigenvalue \( \lambda = \lambda_1 \), the corresponding eigenvector \( x \) satisfies:</p>
<div class="math-left">\( (A - \lambda_1 I)x = 0 \)</div>
<p>Let \( A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \). The eigenvalue decomposition of a square matrix \( A \) is given by:</p>
<p>\[
A = P \Lambda P^{-1}
\]</p>
<p>Where:</p>
<ul>
  <li>\( \Lambda \) is a diagonal matrix of eigenvalues</li>
  <li>\( P \) is a matrix whose columns are the eigenvectors corresponding to the eigenvalues</li>
</ul>

<h4>Step 1: Find the eigenvalues</h4>
<p>We solve the characteristic equation \( \det(A - \lambda I) = 0 \).</p>
<p>\[
\begin{vmatrix}
1 - \lambda & 2 \\
3 & 4 - \lambda
\end{vmatrix} = (1 - \lambda)(4 - \lambda) - 6 = \lambda^2 - 5\lambda - 2
\]</p>
<p>Solving: \( \lambda = \frac{5 \pm \sqrt{33}}{2} \approx -0.372, \ 5.372 \)</p>

<h4>Step 2: Find eigenvectors</h4>
<p>For each eigenvalue \( \lambda \), solve \( (A - \lambda I)\vec{v} = 0 \) to get the corresponding eigenvector \( \vec{v} \).</p>
<p>For example, for \( \lambda_1 = 5.372 \), the corresponding eigenvector is approximately:</p>
<p>\[
\vec{v}_1 = \begin{bmatrix} -0.416 \\ -0.909 \end{bmatrix}
\]</p>
<p>And for \( \lambda_2 = -0.372 \):</p>
<p>\[
\vec{v}_2 = \begin{bmatrix} -0.825 \\ 0.566 \end{bmatrix}
\]</p>

<h4>Step 3: Construct the decomposition</h4>
<p>Using:</p>
<p>\[
P = \begin{bmatrix}
-0.416 & -0.825 \\
-0.909 & 0.566
\end{bmatrix},
\quad
\Lambda = \begin{bmatrix}
5.372 & 0 \\
0 & -0.372
\end{bmatrix}
\]</p>
<p>You can verify that \( A = P \Lambda P^{-1} \) using matrix multiplication.</p>

<hr>
<h2 id = "svd">Singular Value Decomposition (SVD)</h2>
<p>Singular Value Decomposition (SVD) factorizes a matrix into orthogonal vectors and singular values, providing insight into its rank, range, and numerical stability.</p>

<p>SVD is a powerful matrix decomposition technique that expresses any matrix \( A \in \mathbb{R}^{m \times n} \) as:</p>
<div class="math-block">\( A = U \Sigma V^T \)</div>
<ul>
  <li>\( U \): Orthogonal matrix (size \( m \times m \))</li>
  <li>\( \Sigma \): Diagonal matrix with singular values</li>
  <li>\( V^T \): Transpose of orthogonal matrix \( V \)</li>
</ul>

<h3>Step 1: Define the matrix</h3>
<p>We are using the matrix:</p>
<div class="math-block">
  \( A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \)
</div>

<h3>Step 2: Compute \( A^T A \) and \( A A^T \)</h3>
<div class="math-block">
  \( A^T A = \begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix} \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 10 & 14 \\ 14 & 20 \end{bmatrix} \)
</div>
<div class="math-block">
  \( A A^T = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix} = \begin{bmatrix} 5 & 11 \\ 11 & 25 \end{bmatrix} \)
</div>

<h3>Step 3: Find eigenvalues of \( A^T A \)</h3>
<p>We solve the characteristic equation:</p>
<div class="math-block">
  \( \text{det}(A^T A - \lambda I) = 0 \)
</div>
<p>For \( A^T A = \begin{bmatrix} 10 & 14 \\ 14 & 20 \end{bmatrix} \), the eigenvalues are:</p>
<ul>
  <li>λ₁ ≈ 29.866</li>
  <li>λ₂ ≈ 0.134</li>
</ul>

<h3>Step 4: Singular Values</h3>
<p>Take square roots of eigenvalues to get singular values:</p>
<ul>
  <li>σ₁ = \( \sqrt{29.866} \approx 5.466 \)</li>
  <li>σ₂ = \( \sqrt{0.134} \approx 0.366 \)</li>
</ul>

<h3>Step 5: Eigenvectors of \( A^T A \) and \( A A^T \)</h3>
<p>Let \( v_1 \), \( v_2 \) be eigenvectors of \( A^T A \). These form the columns of \( V \).</p>
<p>To get \( u_1, u_2 \):</p>
<div class="math-block">
  \( u_i = \frac{A v_i}{\sigma_i} \)
</div>
<p>These form the columns of \( U \).</p>

<h3>Step 6: Final Decomposition</h3>
<p>Putting everything together:</p>
<div class="math-block">
  \( U \approx \begin{bmatrix} 0.404 & -0.915 \\ 0.915 & 0.404 \end{bmatrix} \quad
  \Sigma = \begin{bmatrix} 5.466 & 0 \\ 0 & 0.366 \end{bmatrix} \quad
  V^T \approx \begin{bmatrix} 0.576 & 0.817 \\ -0.817 & 0.576 \end{bmatrix} \)
</div>
<hr>
<h2  id = "lu">LU Decomposition</h2>
<p>LU decomposition breaks a matrix into a product of a lower and an upper triangular matrix, simplifying linear equation solving and matrix inversion.</p>

<p>LU Decomposition is the process of factoring a matrix \( A \) into two triangular matrices: a lower triangular matrix \( L \) and an upper triangular matrix \( U \), such that:</p>
<div class="math-block">\( A = L \cdot U \)</div>	  
<h3>Matrix A</h3>
<div class="math-block">
	\( A = \begin{bmatrix}
	2 & 4 & 3 & 5 \\
	-4 & -7 & -5 & -8 \\
	6 & 8 & 2 & 9 \\
	4 & 9 & -2 & 14
	\end{bmatrix} \)
</div>
<h3>Step 1: First Column Elimination</h3>
<p>We eliminate the entries below the first pivot (2 in row 1):</p>
<ul>
	<li>\( R_2 \leftarrow R_2 + 2 \cdot R_1 \) → Multiplier: -2</li>
	<li>\( R_3 \leftarrow R_3 - 3 \cdot R_1 \) → Multiplier: 3</li>
	<li>\( R_4 \leftarrow R_4 - 2 \cdot R_1 \) → Multiplier: 2</li>
</ul>
<p>Updated matrix U:</p>
<div class="math-block">
	\( U_1 = \begin{bmatrix}
	2 & 4 & 3 & 5 \\
	0 & 1 & 1 & 2 \\
	0 & -4 & -7 & -6 \\
	0 & 1 & -8 & 4
	\end{bmatrix} \)
</div>
<p>Partial L matrix:</p>
<div class="math-block">
	\( L = \begin{bmatrix}
	1 & 0 & 0 & 0 \\
	-2 & 1 & 0 & 0 \\
	3 & 0 & 1 & 0 \\
	2 & 0 & 0 & 1
	\end{bmatrix} \)
</div>
<h3>Step 2: Second Column Elimination</h3>
<ul>
	<li>\( R_3 \leftarrow R_3 + 4 \cdot R_2 \) → Multiplier: -4</li>
	<li>\( R_4 \leftarrow R_4 - 1 \cdot R_2 \) → Multiplier: 1</li>
</ul>
<p>Updated matrix U:</p>
<div class="math-block">
	\( U_2 = \begin{bmatrix}
	2 & 4 & 3 & 5 \\
	0 & 1 & 1 & 2 \\
	0 & 0 & -3 & 2 \\
	0 & 0 & -9 & 2
	\end{bmatrix} \)
</div>
<p>Updated L matrix:</p>
<div class="math-block">
	\( L = \begin{bmatrix}
	1 & 0 & 0 & 0 \\
	-2 & 1 & 0 & 0 \\
	3 & -4 & 1 & 0 \\
	2 & 1 & 0 & 1
	\end{bmatrix} \)
</div>
<h3>Step 3: Third Column Elimination</h3>
<ul>
	<li>\( R_4 \leftarrow R_4 - 3 \cdot R_3 \) → Multiplier: 3</li>
</ul>	  
<p>Final matrix U:</p>
<div class="math-block">
	\( U = \begin{bmatrix}
	2 & 4 & 3 & 5 \\
	0 & 1 & 1 & 2 \\
	0 & 0 & -3 & 2 \\
	0 & 0 & 0 & -4
	\end{bmatrix} \)
</div>
<p>Final L matrix:</p>
<div class="math-block">
	\( L = \begin{bmatrix}
	1 & 0 & 0 & 0 \\
	-2 & 1 & 0 & 0 \\
	3 & -4 & 1 & 0 \\
	2 & 1 & 3 & 1
	\end{bmatrix} \)
</div>
<hr>
<h2 id = "ref">Row Echelon Form (REF)</h2>
<p>Row echelon form is a simplified matrix form where each leading entry is to the right of the one above, making it ideal for solving linear systems using back-substitution.</p>

<p>A matrix is in <strong>Row Echelon Form</strong> if:</p>
<ul>
	<li>All rows of all zeroes are at the bottom.</li>
	<li>The leading entry of each non-zero row is to the right of the leading entry of the row above it.</li>
	<li>All entries below a pivot are zeros.</li>
</ul>		  
<h3>Input Matrix:</h3>
<div class="math-block">
	\( A = \begin{bmatrix} 1 & -2 & 1 \\ 1 & -1 & 2 \\ 0 & -2 & 2 \end{bmatrix} \)
</div>		  
<h3>Step 1: Eliminate below first pivot</h3>
<p>Apply \( R_2 \leftarrow R_2 - R_1 \)</p>
<div class="math-block">
	\( \begin{bmatrix} 1 & -2 & 1 \\ 0 & 1 & 1 \\ 0 & -2 & 2 \end{bmatrix} \)
</div>		  
<h3>Step 2: Eliminate below pivot in 2nd column</h3>
<p>Apply \( R_3 \leftarrow R_3 + 2R_2 \)</p>
<div class="math-block">
	\( \begin{bmatrix} 1 & -2 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 4 \end{bmatrix} \)
</div>		  
<h3>Final REF:</h3>
<div class="math-block">
	\( \text{REF}(A) = \begin{bmatrix} 1 & -2 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 4 \end{bmatrix} \)
</div>		  
<p>This matrix is now in row echelon form.</p>
<hr>
<h2 id = "rank">Rank of a Matrix</h2>
<p>
	<strong>Theory:</strong>
</p>
<p>
	<strong>Definition</strong>: The rank of a matrix is defined as the maximum number of linearly independent rows (or columns) in the matrix. It can also be seen as the dimension of the row space or column space of the matrix.
</p>
<p>
	&#xa0;
</p>
<p>Let’s consider the matrix:</p>
<div class="math-left">
	A = 
	\( \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix} \)
</div>		  
<p>Convert it to REF:</p>
<div class="math-left">
	REF(A) = 
	\( \begin{bmatrix} 1 & 2 & 3 \\ 0 & -3 & -6 \\ 0 & 0 & 0 \end{bmatrix} \)
</div>	  
<p>This matrix has <strong>2 non-zero rows</strong>, so:</p>
<p><strong>Rank(A) = 2</strong></p>	  
<hr>		  
<h3>Example 2: Zero Matrix (No Rank)</h3>
<div class="math-left">
	B = 
	\( \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} \)
</div>		  
<p>There are no non-zero rows.</p>
<p><strong>Rank(B) = 0</strong></p>
<hr/>
  <h2 id="system">System of Linear Equations</h2>
  <p>A system of linear equations consists of multiple linear equations involving the same set of variables. Solving such systems helps determine the values of unknowns that satisfy all equations simultaneously.</p>

  <p>Consider a system of \( m \) equations with \( n \) unknowns, represented in matrix form as:</p>
  <div class="math-left">\( A\vec{x} = \vec{b} \)</div>
  <p>where:</p>
  <ul>
    <li>\( A \) is an \( m \times n \) coefficient matrix</li>
    <li>\( \vec{x} \) is an \( n \times 1 \) vector of unknowns</li>
    <li>\( \vec{b} \) is an \( m \times 1 \) constant vector</li>
  </ul>

  <h3>Example:</h3>
  <p>Suppose we have the following system:</p>
  <div class="math-left">
    \[
    \begin{aligned}
    x + 2y &= 5 \\
    3x + 4y &= 11
    \end{aligned}
    \]
  </div>

  <p>It can be written in matrix form as:</p>
  <div class="math-left">
    \[
    \begin{bmatrix}
    1 & 2 \\
    3 & 4
    \end{bmatrix}
    \begin{bmatrix}
    x \\
    y
    \end{bmatrix}
    =
    \begin{bmatrix}
    5 \\
    11
    \end{bmatrix}
    \]
  </div>

  <h3>Solution Methods:</h3>
  <p>There are several techniques to solve such systems:</p>
  <ul>
    <li><strong>Gaussian Elimination</strong>: Reduces the system to row echelon form and then back-substitutes to find the solution.</li>
    <li><strong>Matrix Inversion</strong>: If \( A \) is square and invertible, the solution is \( \vec{x} = A^{-1}\vec{b} \).</li>
    <li><strong>LU Decomposition</strong>: Factors \( A \) into \( LU \) and solves via forward and backward substitution.</li>
  </ul>

  <h3>Interpreting Solutions:</h3>
  <ul>
    <li><strong>Unique Solution</strong>: The system has one solution (e.g., lines intersect at a single point).</li>
    <li><strong>Infinite Solutions</strong>: The equations are dependent (e.g., same line).</li>
    <li><strong>No Solution</strong>: The system is inconsistent (e.g., parallel lines).</li>
  </ul>

  <p>Systems of linear equations are fundamental in engineering, physics, and computer science for modeling real-world problems.</p>
</body>
</html>