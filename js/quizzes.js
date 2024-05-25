//Mathematics 
function check()  
{ 
    var c= 0; 
    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
    var q6=document.quiz.question6.value;  
    var q7=document.quiz.question7.value;  
    var q8=document.quiz.question8.value;  
    var q9=document.quiz.question9.value; 
    var q10=document.quiz.question10.value; 
    var score=document.getElementById('score'); 
    
    if(q1=="an element"){c++}  
    if(q2=="Null Set"){c++}  
    if(q3=="Set"){c++} 
    if(q4=="Proper Subset"){c++} 
    if(q5=="Set Builder Form"){c++} 
    if(q6=="Roster Form"){c++}
    if(q7=="A ∩ B = {10}"){c++} 
    if(q8=="n(A) = 5"){c++} 
    if(q9=="A’ = {4, 6, 7, 8, 9, 10}"){c++} 
    if(q10=="A ∪ B = {a, b, c, d, e, f, g, h, i}"){c++}
    score.textContent= `SCORE: ${c}/10`;   
}     

function check1()  
{ 
    var d= 0;
    var score=document.getElementById('score');   

    var q11=document.quiz.question11.value; 
    var q12=document.quiz.question12.value;  
    var q13=document.quiz.question13.value; 
    var q14=document.quiz.question14.value; 
    var q15=document.quiz.question15.value;  
    var q16=document.quiz.question16.value;  
    var q17=document.quiz.question17.value;  
    var q18=document.quiz.question18.value;  
    var q19=document.quiz.question19.value; 
    var q20=document.quiz.question20.value; 
     
    
    if(q11=="Addition, Subtraction, Multiplication, Division"){d++}  
    if(q12=="-8"){d++}  
    if(q13=="Positive"){d++} 
    if(q14=="Negative"){d++} 
    if(q15=="21"){d++} 
    if(q16=="Positive"){d++}
    if(q17=="-235"){d++} 
    if(q18=="400"){d++} 
    if(q19=="-10"){d++} 
    if(q20=="The sign of the integer with higher value"){d++} 
      
     score.textContent= `SCORE: ${d}/10`;
}    

function check2()  
{ 
    var e= 0;
    var score=document.getElementById('score');   

    var q21=document.quiz.question21.value; 
    var q22=document.quiz.question22.value;  
    var q23=document.quiz.question23.value; 
    var q24=document.quiz.question24.value; 
    var q25=document.quiz.question25.value;  
    var q26=document.quiz.question26.value;  
    var q27=document.quiz.question27.value;  
    var q28=document.quiz.question28.value;  
    var q29=document.quiz.question29.value; 
    var q30=document.quiz.question30.value; 
     
    
    if(q21=="Rational Numbers"){e++}  
    if(q22=="Irrational Numbers"){e++}  
    if(q23=="Irrational Numbers"){e++} 
    if(q24=="Rational Numbers"){e++} 
    if(q25=="Closure Property"){e++} 
    if(q26=="Associative Property"){e++}
    if(q27=="Additive Identity Property"){e++} 
    if(q28=="Commutative Property"){e++} 
    if(q29=="Rational Numbers"){e++} 
    if(q30=="√10"){e++} 
      
     score.textContent= `SCORE: ${e}/10`;
}  

function check3()  
{ 
    var f= 0;
    var score=document.getElementById('score');   

    var q31=document.quiz.question31.value; 
    var q32=document.quiz.question32.value;  
    var q33=document.quiz.question33.value; 
    var q34=document.quiz.question34.value; 
    var q35=document.quiz.question35.value;  
    var q36=document.quiz.question36.value;  
    var q37=document.quiz.question37.value;  
    var q38=document.quiz.question38.value;  
    var q39=document.quiz.question39.value; 
    var q40=document.quiz.question40.value; 
     
    
    if(q31=="2"){f++}  
    if(q32=="Trinomial"){f++}  
    if(q33=="Quintic"){f++} 
    if(q34=="1"){f++} 
    if(q35=="Polynomial"){f++} 
    if(q36=="Term"){f++}
    if(q37=="Constant"){f++} 
    if(q38=="Leading Term"){f++} 
    if(q39=="Numerical Coefficient"){f++} 
    if(q40=="Standard Form"){f++} 
      
     score.textContent= `SCORE: ${f}/10`;
}  
 
function check4()  
{ 
    var g= 0;
    var score=document.getElementById('score');   

    var q41=document.quiz.question41.value; 
    var q42=document.quiz.question42.value;  
    var q43=document.quiz.question43.value; 
    var q44=document.quiz.question44.value; 
    var q45=document.quiz.question45.value;  
    var q46=document.quiz.question46.value;  
    var q47=document.quiz.question47.value;  
    var q48=document.quiz.question48.value;  
    var q49=document.quiz.question49.value; 
    var q50=document.quiz.question50.value; 
     
    
    if(q41=="(7x - 3y)(1 + 7x – 3y)"){g++}  
    if(q42=="(x + 2t)(x – 2t)"){g++}  
    if(q43=="Special Products"){g++} 
    if(q44=="Prime Numbers"){g++} 
    if(q45=="Difference of Two Squares"){g++} 
    if(q46=="Factoring"){g++}
    if(q47=="Composite Numbers"){g++} 
    if(q48=="Sum of Two Cubes"){g++} 
    if(q49=="Difference of Two Cubes"){g++} 
    if(q50=="(4x + 9y)(4x - 9y)"){g++} 
      
     score.textContent= `SCORE: ${g}/10`;
} 
 
function check5()  
{ 
    var h= 0;
    var score=document.getElementById('score');   

    var q51=document.quiz.question51.value; 
    var q52=document.quiz.question52.value;  
    var q53=document.quiz.question53.value; 
    var q54=document.quiz.question54.value; 
    var q55=document.quiz.question55.value;  
    var q56=document.quiz.question56.value;  
    var q57=document.quiz.question57.value;  
    var q58=document.quiz.question58.value;  
    var q59=document.quiz.question59.value; 
    var q60=document.quiz.question60.value; 
     
    
    if(q51=="Relation"){h++}  
    if(q52=="Function"){h++}  
    if(q53=="Rectangular Coordinate System"){h++} 
    if(q54=="{(1,-5), (-1,6), (1,5), (6,-3)}"){h++} 
    if(q55=="D = {0, 1, 2, -4}"){h++} 
    if(q56=="R = {1, -3, -4}"){h++} 
    if(q57=="{(0,2), (1,3), (4,3), (1,2)}"){h++}
    if(q58=="Function"){h++} 
    if(q59=="Range"){h++} 
    if(q60=="Domain"){h++} 
      
     score.textContent= `SCORE: ${h}/10`;
} 

function check6()  
{ 
    var j= 0;
    var score=document.getElementById('score');   

    var q61=document.quiz.question61.value; 
    var q62=document.quiz.question62.value;  
    var q63=document.quiz.question63.value; 
    var q64=document.quiz.question64.value; 
    var q65=document.quiz.question65.value;  
    var q66=document.quiz.question66.value;  
    var q67=document.quiz.question67.value;  
    var q68=document.quiz.question68.value;  
    var q69=document.quiz.question69.value; 
    var q70=document.quiz.question70.value; 
     
    
    if(q61=="Simple Implication"){j++}  
    if(q62=="If then statement"){j++}  
    if(q63=="Hypothesis"){j++} 
    if(q64=="Conclusion"){j++} 
    if(q65=="Conditional statements"){j++} 
    if(q66=="Deductive Reasoning"){j++} 
    if(q67=="Inductive Reasoning"){j++}
    if(q68=="Contrapositive"){j++} 
    if(q69=="Inverse"){j++} 
    if(q70=="Converse"){j++} 
      
     score.textContent= `SCORE: ${j}/10`;
}  

function check7()  
{ 
    var k= 0;
    var score=document.getElementById('score');   

    var q71=document.quiz.question71.value; 
    var q72=document.quiz.question72.value;  
    var q73=document.quiz.question73.value; 
    var q74=document.quiz.question74.value; 
    var q75=document.quiz.question75.value;  
    var q76=document.quiz.question76.value;  
    var q77=document.quiz.question77.value;  
    var q78=document.quiz.question78.value;  
    var q79=document.quiz.question79.value; 
    var q80=document.quiz.question80.value; 
     
    
    if(q71=="Vertex"){k++}  
    if(q72=="f(x) = a(x - h)^2 + k"){k++}  
    if(q73=="Quadratic Function"){k++} 
    if(q74=="f(x) = a(x - p)(x - q)"){k++} 
    if(q75=="Parabola"){k++} 
    if(q76=="f(x) = ax^2 + bx + c"){k++} 
    if(q77=="(0, -7)"){k++}
    if(q78=="(-5, -4)"){k++} 
    if(q79=="16"){k++} 
    if(q80=="x = 2, x = -3"){k++} 
      
     score.textContent= `SCORE: ${k}/10`;
}  

function check8()  
{ 
    var k= 0;
    var score=document.getElementById('score');   

    var q71=document.quiz.question71.value; 
    var q72=document.quiz.question72.value;  
    var q73=document.quiz.question73.value; 
    var q74=document.quiz.question74.value; 
    var q75=document.quiz.question75.value;  
    var q76=document.quiz.question76.value;  
    var q77=document.quiz.question77.value;  
    var q78=document.quiz.question78.value;  
    var q79=document.quiz.question79.value; 
    var q80=document.quiz.question80.value; 
     
    
    if(q71=="Combined Variation"){k++}  
    if(q72=="Variations"){k++}  
    if(q73=="Direct Variation"){k++} 
    if(q74=="Joint Variation"){k++} 
    if(q75=="Inverse Variation"){k++} 
    if(q76=="30"){k++} 
    if(q77=="y = 5.25x"){k++}
    if(q78=="Direct Variation"){k++} 
    if(q79=="Inverse Variation"){k++} 
    if(q80=="-80"){k++} 
      
     score.textContent= `SCORE: ${k}/10`;
}  

function check9()  
{ 
    var k= 0;
    var score=document.getElementById('score');   

    var q71=document.quiz.question71.value; 
    var q72=document.quiz.question72.value;  
    var q73=document.quiz.question73.value; 
    var q74=document.quiz.question74.value; 
    var q75=document.quiz.question75.value;  
    var q76=document.quiz.question76.value;  
    var q77=document.quiz.question77.value;  
    var q78=document.quiz.question78.value;  
    var q79=document.quiz.question79.value; 
    var q80=document.quiz.question80.value; 
     
    
    if(q71=="False"){k++}  
    if(q72=="False"){k++}  
    if(q73=="Parallel"){k++} 
    if(q74=="Parallelogram"){k++} 
    if(q75=="The total of its interior angles is 360 degrees"){k++} 
    if(q76=="They are both parallelograms"){k++} 
    if(q77=="True"){k++}
    if(q78=="Exactly one pair of opposite angles are congruent"){k++} 
    if(q79=="Opposite sides are congruent"){k++} 
    if(q80=="180 degrees"){k++} 
      
     score.textContent= `SCORE: ${k}/10`;
} 
 
function check10()  
{ 
    var k= 0;
    var score=document.getElementById('score');   

    var q71=document.quiz.question71.value; 
    var q72=document.quiz.question72.value;  
    var q73=document.quiz.question73.value; 
    var q74=document.quiz.question74.value; 
    var q75=document.quiz.question75.value;  
    var q76=document.quiz.question76.value;  
    var q77=document.quiz.question77.value;  
    var q78=document.quiz.question78.value;  
    var q79=document.quiz.question79.value; 
    var q80=document.quiz.question80.value; 
     
    
    if(q71=="Right Triangle"){k++}  
    if(q72=="Angle of Depression"){k++}  
    if(q73=="Trigonometry"){k++} 
    if(q74=="False"){k++} 
    if(q75=="Secant"){k++} 
    if(q76=="Angle of Elevation"){k++} 
    if(q77=="Cosecant"){k++}
    if(q78=="Cosine"){k++} 
    if(q79=="Cotangent"){k++} 
    if(q80=="Adjacent  Side"){k++} 
      
     score.textContent= `SCORE: ${k}/10`;
}  

function check11()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
    var q6=document.quiz.question6.value;  
    var q7=document.quiz.question7.value;  
    var q8=document.quiz.question8.value;  
    var q9=document.quiz.question9.value; 
    var q10=document.quiz.question10.value; 
     
    
    if(q1=="37, 44, 51"){l++}  
    if(q2=="Sequence"){l++}  
    if(q3=="4, 7, 12"){l++} 
    if(q4=="Geometric Sequence"){l++} 
    if(q5=="Fibonacci Sequence"){l++} 
    if(q6=="12, 19, 26, 33, 40"){l++} 
    if(q7=="Harmonic Sequence"){l++}
    if(q8=="324"){l++} 
    if(q9=="Arithmetic Sequence"){l++} 
    if(q10=="16 and 54"){l++} 
      
     score.textContent= `SCORE: ${l}/10`;
}  

function check12()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
    var q6=document.quiz.question6.value;  
    var q7=document.quiz.question7.value;  
    var q8=document.quiz.question8.value;  
    var q9=document.quiz.question9.value; 
    var q10=document.quiz.question10.value; 
     
    
    if(q1=="Polynomial Function"){l++}  
    if(q2=="3x-7"){l++}  
    if(q3=="5x^-1+1"){l++} 
    if(q4=="Zero Polynomial Function"){l++} 
    if(q5=="Constant Polynomial Function"){l++} 
    if(q6=="Cubic Polynomial Function"){l++} 
    if(q7=="Linear Polynomial Function"){l++}
    if(q8=="Quadratic Polynomial Function"){l++} 
    if(q9=="False"){l++} 
    if(q10=="Quartic Polynomial Function"){l++} 
      
     score.textContent= `SCORE: ${l}/10`;
} 

function check13()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
    var q6=document.quiz.question6.value;  
    var q7=document.quiz.question7.value;  
    var q8=document.quiz.question8.value;  
    var q9=document.quiz.question9.value; 
    var q10=document.quiz.question10.value; 
     
    
    if(q1=="12"){l++}  
    if(q2=="Permutations"){l++}  
    if(q3=="72"){l++} 
    if(q4=="Combinations"){l++} 
    if(q5=="True"){l++} 
    if(q6=="64"){l++} 
    if(q7=="24"){l++}
    if(q8=="False"){l++} 
    if(q9=="604,800"){l++} 
    if(q10=="720"){l++} 
      
     score.textContent= `SCORE: ${l}/10`;
} 

function check14()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
    var q6=document.quiz.question6.value;  
    var q7=document.quiz.question7.value;  
    var q8=document.quiz.question8.value;  
    var q9=document.quiz.question9.value; 
    var q10=document.quiz.question10.value; 
     
    
    if(q1=="Percentile Rank"){l++}  
    if(q2=="10"){l++}  
    if(q3=="False"){l++} 
    if(q4=="Decile"){l++} 
    if(q5=="12"){l++} 
    if(q6=="Measures of Position"){l++} 
    if(q7=="Percentile"){l++}
    if(q8=="25th percentile"){l++} 
    if(q9=="Quartile"){l++} 
    if(q10=="20"){l++} 
      
     score.textContent= `SCORE: ${l}/10`;
}
 

//Science 
function check15()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
    var q6=document.quiz.question6.value;  
    var q7=document.quiz.question7.value;  
    var q8=document.quiz.question8.value;  
    var q9=document.quiz.question9.value; 
    var q10=document.quiz.question10.value; 
     
    
    if(q1=="Solute"){l++}  
    if(q2=="Stirring"){l++}  
    if(q3=="Solution"){l++} 
    if(q4=="Manipulated in the experiment"){l++} 
    if(q5=="Measured or responding in an experiment"){l++} 
    if(q6=="Homogeneous mixture"){l++} 
    if(q7=="Solute and solvent"){l++}
    if(q8=="because these are so small that they pass through the filter paper or cheesecloth."){l++} 
    if(q9=="Coffee powder"){l++} 
    if(q10=="Is a homogeneous mixture of one or more solutes dissolved in a solvent."){l++} 
      
     score.textContent= `SCORE: ${l}/10`;
} 
 
function check16()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
     
    
    if(q1=="If the mass of either object increases, the gravitational force between them also increases"){l++}  
    if(q2=="The Earth is much more massive than them that is why their attraction is not as great as the gravitational pull of the Earth."){l++}  
    if(q3=="If the forces acting on an object are balanced, the object either stays at rest or continues to move at constant velocity."){l++} 
    if(q4=="The object changes its motion because an unbalanced force, such as friction, causes it to change its motion."){l++} 
    if(q5=="Newton's Third Law of Motion states that for every action, there is an equal and opposite reaction."){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
}     

function check17()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
     
    
    if(q1=="Work is a means of transferring energy from one object to another."){l++}  
    if(q2=="The object doing the work loses energy, while the object on which work is done gains energy."){l++}  
    if(q3=="Kinetic energy is the energy of a moving object"){l++} 
    if(q4=="Potential energy is the energy an object possesses due to its position, particularly when work is done against the force of gravity."){l++} 
    if(q5=="The common reference level used to measure the height of an object when calculating its gravitational potential energy is the ground."){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
}  

function check18()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
     
    
    if(q1=="Heat is the transfer of thermal energy between objects or places due to a difference in temperature."){l++}  
    if(q2=="Heat transfers from an object of higher temperature to an object of lower temperature."){l++}  
    if(q3=="Yes"){l++} 
    if(q4=="c"){l++} 
    if(q5=="Yes"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check19()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
     
    
    if(q1=="a"){l++}  
    if(q2=="c"){l++}  
    if(q3=="b"){l++} 
    if(q4=="c"){l++} 
    if(q5=="b"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check20()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
     
    
    if(q1=="a"){l++}  
    if(q2=="a"){l++}  
    if(q3=="c"){l++} 
    if(q4=="c"){l++} 
    if(q5=="a"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check21()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
     
    
    if(q1=="a"){l++}  
    if(q2=="b"){l++}  
    if(q3=="c"){l++} 
    if(q4=="b"){l++} 
    if(q5=="a"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check22()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
     
    
    if(q1=="b"){l++}  
    if(q2=="c"){l++}  
    if(q3=="c"){l++} 
    if(q4=="d"){l++} 
    if(q5=="b"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check23()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
     
    
    if(q1=="c"){l++}  
    if(q2=="d"){l++}  
    if(q3=="a"){l++} 
    if(q4=="d"){l++} 
    if(q5=="a"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check24()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
     
    
    if(q1=="a"){l++}  
    if(q2=="d"){l++}  
    if(q3=="c"){l++} 
    if(q4=="c"){l++} 
    if(q5=="a"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check25()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
     
    
    if(q1=="c"){l++}  
    if(q2=="b"){l++}  
    if(q3=="c"){l++} 
    if(q4=="a"){l++} 
    if(q5=="d"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check26()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
     
    
    if(q1=="a"){l++}  
    if(q2=="a"){l++}  
    if(q3=="c"){l++} 
    if(q4=="a"){l++} 
    if(q5=="b"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check27()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;  
     
    
    if(q1=="a"){l++}  
    if(q2=="b"){l++}  
    if(q3=="c"){l++} 
    if(q4=="d"){l++} 
    if(q5=="d"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

//English

function check28()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
    var q6=document.quiz.question6.value;  
    var q7=document.quiz.question7.value;  
    var q8=document.quiz.question8.value;  
    var q9=document.quiz.question9.value; 
    var q10=document.quiz.question10.value;  
     
    
    if(q1=="b"){l++}  
    if(q2=="a"){l++}  
    if(q3=="a"){l++} 
    if(q4=="a"){l++} 
    if(q5=="a"){l++} 
    if(q6=="d"){l++} 
    if(q7=="b"){l++}
    if(q8=="d"){l++} 
    if(q9=="b"){l++} 
    if(q10=="c"){l++}  
      
     score.textContent= `SCORE: ${l}/10`;
} 

function check29()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="a"){l++}  
    if(q2=="b"){l++}  
    if(q3=="a"){l++} 
    if(q4=="c"){l++} 
    if(q5=="d"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check30()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="a"){l++}  
    if(q2=="b"){l++}  
    if(q3=="c"){l++} 
    if(q4=="b"){l++} 
    if(q5=="d"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check31()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
    var q6=document.quiz.question6.value;  
    var q7=document.quiz.question7.value;  
    var q8=document.quiz.question8.value;  
    var q9=document.quiz.question9.value; 
    var q10=document.quiz.question10.value;  
     
    
    if(q1=="c"){l++}  
    if(q2=="a"){l++}  
    if(q3=="d"){l++} 
    if(q4=="b"){l++} 
    if(q5=="b"){l++} 
    if(q6=="c"){l++} 
    if(q7=="d"){l++}
    if(q8=="c"){l++} 
    if(q9=="b"){l++} 
    if(q10=="d"){l++}  
      
     score.textContent= `SCORE: ${l}/10`;
}  

function check32()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
    var q6=document.quiz.question6.value;  
    var q7=document.quiz.question7.value;  
    var q8=document.quiz.question8.value;  
    var q9=document.quiz.question9.value; 
    var q10=document.quiz.question10.value;  
     
    
    if(q1=="a"){l++}  
    if(q2=="d"){l++}  
    if(q3=="b"){l++} 
    if(q4=="c"){l++} 
    if(q5=="a"){l++} 
    if(q6=="c"){l++} 
    if(q7=="d"){l++}
    if(q8=="b"){l++} 
    if(q9=="b"){l++} 
    if(q10=="a"){l++}  
      
     score.textContent= `SCORE: ${l}/10`;
}  

function check33()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="b"){l++}  
    if(q2=="a"){l++}  
    if(q3=="d"){l++} 
    if(q4=="d"){l++} 
    if(q5=="a"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
}  

function check34()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
    var q6=document.quiz.question6.value;  
    var q7=document.quiz.question7.value;  
    var q8=document.quiz.question8.value;  
    var q9=document.quiz.question9.value; 
    var q10=document.quiz.question10.value;  
     
    
    if(q1=="a"){l++}  
    if(q2=="b"){l++}  
    if(q3=="c"){l++} 
    if(q4=="b"){l++} 
    if(q5=="b"){l++} 
    if(q6=="b"){l++} 
    if(q7=="c"){l++}
    if(q8=="a"){l++} 
    if(q9=="a"){l++} 
    if(q10=="b"){l++}  
      
     score.textContent= `SCORE: ${l}/10`;
} 

function check35()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="a"){l++}  
    if(q2=="b"){l++}  
    if(q3=="c"){l++} 
    if(q4=="d"){l++} 
    if(q5=="d"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
}   

function check36()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="c"){l++}  
    if(q2=="a"){l++}  
    if(q3=="b"){l++} 
    if(q4=="a"){l++} 
    if(q5=="d"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
}  

function check37()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="b"){l++}  
    if(q2=="c"){l++}  
    if(q3=="a"){l++} 
    if(q4=="b"){l++} 
    if(q5=="a"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
}  

function check38()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="a"){l++}  
    if(q2=="d"){l++}  
    if(q3=="c"){l++} 
    if(q4=="b"){l++} 
    if(q5=="c"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
}  

function check39()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
    var q6=document.quiz.question6.value;  
    var q7=document.quiz.question7.value;  
    var q8=document.quiz.question8.value;  
    var q9=document.quiz.question9.value; 
    var q10=document.quiz.question10.value;  
     
    
    if(q1=="c"){l++}  
    if(q2=="d"){l++}  
    if(q3=="b"){l++} 
    if(q4=="a"){l++} 
    if(q5=="a"){l++} 
    if(q6=="d"){l++} 
    if(q7=="c"){l++}
    if(q8=="a"){l++} 
    if(q9=="b"){l++} 
    if(q10=="d"){l++}  
      
     score.textContent= `SCORE: ${l}/10`;
}  

function check40()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
    var q6=document.quiz.question6.value;  
    var q7=document.quiz.question7.value;  
    var q8=document.quiz.question8.value;  
    var q9=document.quiz.question9.value; 
    var q10=document.quiz.question10.value;  
     
    
    if(q1=="c"){l++}  
    if(q2=="a"){l++}  
    if(q3=="b"){l++} 
    if(q4=="b"){l++} 
    if(q5=="a"){l++} 
    if(q6=="d"){l++} 
    if(q7=="c"){l++}
    if(q8=="a"){l++} 
    if(q9=="c"){l++} 
    if(q10=="b"){l++}  
      
     score.textContent= `SCORE: ${l}/10`;
} 

function check41()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
    var q6=document.quiz.question6.value;  
    var q7=document.quiz.question7.value;  
    var q8=document.quiz.question8.value;  
    var q9=document.quiz.question9.value; 
    var q10=document.quiz.question10.value;  
     
    
    if(q1=="b"){l++}  
    if(q2=="a"){l++}  
    if(q3=="b"){l++} 
    if(q4=="a"){l++} 
    if(q5=="c"){l++} 
    if(q6=="d"){l++} 
    if(q7=="a"){l++}
    if(q8=="b"){l++} 
    if(q9=="c"){l++} 
    if(q10=="d"){l++}  
      
     score.textContent= `SCORE: ${l}/10`;
} 

function check42()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
    var q6=document.quiz.question6.value;  
    var q7=document.quiz.question7.value;  
    var q8=document.quiz.question8.value;  
    var q9=document.quiz.question9.value; 
    var q10=document.quiz.question10.value;  
     
    
    if(q1=="b"){l++}  
    if(q2=="b"){l++}  
    if(q3=="b"){l++} 
    if(q4=="a"){l++} 
    if(q5=="b"){l++} 
    if(q6=="a"){l++} 
    if(q7=="a"){l++}
    if(q8=="b"){l++} 
    if(q9=="b"){l++} 
    if(q10=="b"){l++}  
      
     score.textContent= `SCORE: ${l}/10`;
} 

function check43()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="c"){l++}  
    if(q2=="a"){l++}  
    if(q3=="b"){l++} 
    if(q4=="b"){l++} 
    if(q5=="d"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
}   

function check44()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="b"){l++}  
    if(q2=="c"){l++}  
    if(q3=="b"){l++} 
    if(q4=="d"){l++} 
    if(q5=="a"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
}  

function check45()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="d"){l++}  
    if(q2=="b"){l++}  
    if(q3=="c"){l++} 
    if(q4=="d"){l++} 
    if(q5=="c"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
}  

function check46()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="a"){l++}  
    if(q2=="c"){l++}  
    if(q3=="d"){l++} 
    if(q4=="b"){l++} 
    if(q5=="d"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
}  

function check47()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="a"){l++}  
    if(q2=="a"){l++}  
    if(q3=="c"){l++} 
    if(q4=="b"){l++} 
    if(q5=="a"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
}  

function check48()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="b"){l++}  
    if(q2=="a"){l++}  
    if(q3=="d"){l++} 
    if(q4=="a"){l++} 
    if(q5=="a"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
}  

function check49()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="d"){l++}  
    if(q2=="c"){l++}  
    if(q3=="d"){l++} 
    if(q4=="b"){l++} 
    if(q5=="a"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
}  

function check50()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="b"){l++}  
    if(q2=="b"){l++}  
    if(q3=="d"){l++} 
    if(q4=="b"){l++} 
    if(q5=="c"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check51()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="c"){l++}  
    if(q2=="a"){l++}  
    if(q3=="c"){l++} 
    if(q4=="a"){l++} 
    if(q5=="a"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check52()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="a"){l++}  
    if(q2=="d"){l++}  
    if(q3=="c"){l++} 
    if(q4=="d"){l++} 
    if(q5=="b"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check53()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="c"){l++}  
    if(q2=="d"){l++}  
    if(q3=="b"){l++} 
    if(q4=="c"){l++} 
    if(q5=="a"){l++} 
      
     score.textContent= `SCORE: ${l}/5`;
} 

function check54()  
{ 
    var l= 0;
    var score=document.getElementById('score');   

    var q1=document.quiz.question1.value; 
    var q2=document.quiz.question2.value;  
    var q3=document.quiz.question3.value; 
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value; 
     
    
    if(q1=="b"){l++}  
    if(q2=="a"){l++}  
    if(q3=="b"){l++} 
    if(q4=="c"){l++} 
    if(q5=="d"){l++}  
     score.textContent= `SCORE: ${l}/5`;  
}
 
