/* eslint-disable react/jsx-no-comment-textnodes */
import styles from './style.module.scss';

const TechnicalDocPage = () => {
    return (
    <div className={styles.body}>
        <nav id={styles.navbar}>
          <header id={styles.navbarHeader}>
            <h1>HTML, CSS, Javascript</h1>
            <h1>Documentation</h1>
          </header>
          <div id={styles.navLinksDivision}>
            <a className= "nav-link" href="#regular_expressions">Regular Expressions</a>
            <a className= "nav-link" href="#debugging">Debugging</a>
            <a className= "nav-link" href="#arrays">Arrays</a>
            <a className= "nav-link" href="#javascript_objects">Javascript Objects</a>
            <a className= "nav-link" href="#section5_header">Section5 header</a>
          </div>
        </nav>
        <main className={styles.mainDoc}>
          <section className="main-section" id="regular_expressions">
              <header>
                <h1>Regular Expressions</h1>
              </header>
              <p>Typically used to search for certain patterns within text.</p>
              <h4>Character classes</h4>
              <ul>
                <li><b>.</b> any character except newline</li>
                <li><b>\w\d\s</b>	word, digit, whitespace</li>
                <li><b>\W\D\S</b>	not word, digit, whitespace</li>
                <li><b>[abc]</b>	any of a, b, or c</li>
                <li><b>[^abc]</b>	not a, b, or c</li>
                <li><b>[a-g]</b>	character between a & g</li>
              </ul>
              <h4>Anchors</h4>
              <ul>
                <li><b>^abc$</b>	start / end of the string</li>
                <li><b>\b\B</b>	word, not-word boundary</li>
              </ul>
              <h4>Escaped characters</h4>
              <ul>
                <li><b>\.\*\\</b>	escaped special characters</li>
                <li><b>\t\n\r</b>	tab, linefeed, carriage return</li>
              </ul>
              <h4>Groups & Lookaround</h4>
              <ul>
                <li><b>(abc)</b>	capture group</li>
                <li><b>\1</b>	backreference to group #1</li>
                <li><b>(?:abc)</b>	non-capturing group</li>
                <li><b>(?=abc)</b>	positive lookahead</li>
                <li><b>(?!abc)</b>	negative lookahead</li>
              </ul>
              <h4>Quantifiers & Alternation</h4>
              <ul>
                <li><b>a*a+a?</b>	0 or more, 1 or more, 0 or 1</li>
                <li><b>a&#123;5&#125;a&#123;2,&#125;</b>	exactly five, two or more</li>
                <li><b>a&#123;1,3&#125;</b>	between one & three</li>
                <li><b>a+?a&#123;2,&#125;?</b>	match as few as possible</li>
                <li><b>ab|cd</b>	match ab or cd</li>
              </ul>
          </section>
          <section className="main-section" id="debugging">
              <header>
                <h1>Debugging</h1>
              </header>
              <p>
                Helpful when trying to solve problems with the code.
              </p>
              <code>
                console.log("text");
              </code>
              <p>
                Used to output text into the console.
              </p>
              <code>
                console.clear();
              </code>
              <p>
                Used to clear the console.
              </p>
              <code>
                console.log(typeof var);
              </code>
              <p>
                Outputs the type of the variable into the console.
              </p>
          </section>
          <section className="main-section" id="arrays">
              <header>
                <h1>Arrays</h1>
              </header>
              <p>A datatype that stores multiple variables inside. Each variable has an index.</p>
              <code>let simpleArray = ['one', 2, 'three', true, false, undefined, null];</code>
              <p>
                One dimensional array in Javascript can contain strings, ints, booleans, and special variables like undefined and null.
              </p>
              <code>let twoDimensionalArray = [[1,2],[3,4],[5,6]];</code>
              <p>
                You can create multidimensional arrays by creating arrays inside arrays.
              </p>
              <code>let getFirstElement = simpleArray[0];</code>
              <p>
                You can access data that is stored in an array by using square brackets.
              </p>
              <code>simpleArray[0] = "Value has been changed!";</code>
              <p>
                You can also change the data that is stored inside an array.
              </p>
              <code>simpleArray.push("New variable added to the end of array");</code>
              <code>simpleArray.unshift("New variable added to the start of array", "You can add multiple variables!");</code>
              <p>
                Push is used to add variables to the end of an array. Unshift is used to add variables to the start of an array.
                Unshift is the opposite of shift.
                Instead of shifting array elements to the left after removing an element, it shifts them to the right after adding and element.
              </p>
              <code>simpleArray.pop();</code>
              <code>simpleArray.shift();</code>
              <p>
                Pop removes the last element in the array. Shift removes the first element in the array and shifts all the elements forward.
              </p>
              <code>
                let testArray = [1,2,3,4]; 
                let splicedArray = testArray.splice(1,2);
                // testArray = [1,4];
                // splicedArray = [2,3];
              </code>
              <p>
                splice(x,n) removes n number of elements starting from x from the array and saves them into a new array.
              </p>
              <code>
                let testArray = [1,2,3,4]; 
                let splicedArray = testArray.splice(1,2,5,6);
                // testArray = [1,5,6,4];
                // splicedArray = [2,3];
              </code>
              <p>
                splice(x,n,z) removes n number of elements starting from x from the array and saves them into a new array.
                The new elements are then replaced with elements z.
              </p>
              <code>
                let arr = [1,2,3,4,5,6];
                let slicedArr = arr.slice(3,5);
                // arr remains unmodified.
                // slicedArr = [4, 6];
              </code>
              <p>
                slice(start, end) essentially creates another array and duplicates all elements from start to end into the new array.
              </p>
              <code>
                let arr = [1,2,3,4];
                let total = sum(...arr);
                // total = 10;
              </code>
              <p>
                The spread operator (...) is used to unpack the array. It is useful in functions such as sum.
              </p>
              <code>
                let arr = [1,2,3,4];
                console.log(arr.indexOf(1));
                // Outputs 0.
              </code>
              <p>
              indexOf is used to find the index of an element.
              </p>
          </section>
          <section className="main-section" id="javascript_objects">
              <header>
                <h1>Javascript Objects</h1>
              </header>
              <p>
                Javascript objects are similar to dictionaries in Python.
                You basically use the 'key' to access the 'value'.
                In fact, the syntax is the exact same as what you would use in python.
              </p>
              <code>
                let slime = &#123;
                  name: "slime",
                  description: "A monster that looks to be composed of some form of formless gel-like substance.\n"+
                  "It absorbs and melts it's prey.",
                  stats: &#123;
                    hp: 500,
                    attack: 70,
                    defense: 10
                    &#125;
                &#125;;
                
                console.log(slime['description']); // prints out contents of 'description'
                console.log(slime.stats.hp); // prints out the value of 'hp'
              </code>
              <p>
                You can access values in an object by using their 'key'.
                The dot notation behaves similarly to how objects in Java work.
                The square braket notation basically uses a string to find the property that you are looking for.
                Objects can be nested within another object.
              </p>
              <code>
                delete slime.description;
              </code>
              <p>
                You can use delete to remove a key and it's value from the object;
              </p>
              <code>
                slime.hasOwnProperty('name');
                'name' in slime;
              </code>
              <p>
                You can hasOwnProperty(string) to find out if the object has a key with the same name as string.
                You can also use the 'in' keyword to achieve the same thing.
              </p>
              <code>
                console.log(Object.keys(slime));
              </code>
              <p>
                The Object.keys(obj) function basically returns a list of all the keys inside the obj.
              </p>
          </section>
          <section className="main-section" id="section5_header">
              <header>
                <h1>Section5 header</h1>
              </header>
              Section 5.
          </section>
        </main>
    </div>)
}

export default TechnicalDocPage