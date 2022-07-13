---
share: True
---
# RC- 什么是 Vue

Vue 是一个构建用户界面的 JavaScript 库。它基于标准的 HTML,CSS 和 JavaScript 构建，提供声明式和组件式编程模型以帮你更有效率的构建复杂或简单的用户界面。

## RP- 声明式渲染和命令式渲染

从范式上来看，视图层框架通常分为命令式和声明式，它们各有优缺点。

命令式渲染关注过程，jQuery 就是典型的命令式框架，类似于这样：
1. 获取 id 为 app 的 div 标签
2. 它的文本内容为 hello world
3. 为其绑定点击事件
4. 当点击时弹出提示

翻译成 jQuery 代码：

```js
$('#app').text('hello world').on('click'. ()=>{alert('ok'))
```

翻译成原生 JavaScript 代码：

```js
const div = documnet.querySelector('#app')
div.innerText = 'hello world'
div.addEventListener('click', ()=> {alert('ok)})
```

声明式渲染关注结果，实现的话类似于这样：

```js
<div @click="() => alert('ok')">hello world</div> 
```

Vue.js 帮我们封装了过程。因此，我们能够猜到 Vue.js 的内部实现一定是命令式的，而暴露给用户的却更加声明式。

换句话说，本来我们要的就是用户界面就是 html，vue 用模板语法扩展了 html，使得能声明式的描述 html 的结构。

## RC- 响应式

Vue 自动跟踪 JavaScript 状态变化并高效的更新 DOM。

## RC- 渐进式框架

由于 web 环境高度复杂，所以 Vue 被设计成渐进式框架，即有高度的灵活度。可以用于：
1. 不需要编译过程构建静态页面
2. 像 Web Component 那样插入到任何页面
3. 单页面应用 SPA
4. 全栈/服务端渲染 SSR
5. Jamstack/静态网站生成 SSG
6. 以桌面、移动、WebGL 甚至终端为目标

## RC- 单页组件

即 `*.vue` 文件，是将 html，css，js 融合在一起的方法。为什么和怎样使用单页组件见^[https://vuejs.org/guide/scaling-up/sfc.html]

## API 风格

这里的 API 风格指的是如何定义组件逻辑，Options API 用一个对象定义，所有需要用到的东西都在这个对象里。Composition API 则是通过 import 引入需要的东西来定义。实际上前者是后者的进一步封装。

 Options API 对新手更友好，Composition API 则需要在函数域中直接声明响应式变量，将多个函数的状态组合在一起，以处理复杂问题。更复杂了，但是更自由，更强大，也更具复用性。

关于这两种风格的比较见^[https://vuejs.org/guide/extras/composition-api-faq.html]

### RC-Options API

Options API 就是一个对象，以对象来定义组件逻辑，包含 `data`,`method`,`mounted` 这些方法，这些方法都暴露了 `this` 指向组件实例。

```js
<script>
export default {
  // Properties returned from data() becomes reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

### RC-Composition API

Composition API 引入 API 来定义组件逻辑：

```js
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

# 核心概念

## RB- 创建应用

```js
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
```

- 这里的 app 被称为应用实例
- 这里的 App 被称为根组件，就是一个描述组件的对象。

当 Vue 没有构建这个步骤时，可以直接把容器直接当作模板传入，Vue 会自动把容器内的 HTML 字符串当作模板解析，如：

```js
//html
<div id="app">
  <button @click="count++">{{ count }}</button>
</div>

//js
import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')
```

应用实例也暴露了 `.config` 方法，以此设置一些 app 级别的操作，比如定义错误处理的句柄，注册组件 等。

## RB- 模板语法

| 模板语法         | 模板                              | 速记               | 备注                                                   |
| ---------------- | --------------------------------- | ------------------ | ------------------------------------------------------ |
| 文本插值         | `{{}}`                            |                    | 里面可以是 JavaScript 表达式，注意定义变量啥的不是表达式 |
| 原始 html         | `v-html=`                         |                    |                                                        |
| 属性绑定         | `v-bind:id=`                      | `:id=`             |                                                        |
| 布尔属性         | `:disable=`                       |                    | 这个的值为 false，属性会被忽略                          |
| 动态绑定多个属性 | `v-bind=" 包含多个属性的一个对象 "` |                    |                                                        |
| 回调函数         | `:title="toTitleDate(date)"`      |                    |                                                        |
| 条件指令         | `v-if`                            |                    |                                                        |
| 事件绑定         | `v-on:click=`                     | `@click`           |                                                        |
| 动态参数         | `v-bind:[atributeName]`           | `:[atributeName]=` | 事件绑定也可以采取同样的方式，值为 `null` 将取消绑定     |
| 修饰符           | `@submit.prevent=`                                  |                    |                                                        |

![](https://vuejs.org/assets/directive.69c37117.png)

### RP- 作用域限制

模板语法的全局作用域是被限制了的，相当于一个沙盒，只能访问一些如 `Math` 和 `Date` 这样的全局变量，可以在这里查看可访问的全局变量^[https://github.com/vuejs/core/blob/main/packages/shared/src/globalsWhitelist.ts#L3]

```js
const GLOBALS_WHITE_LISTED =
  'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
  'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
  'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt'
```

未在上述列表中包含的全局变量，包括 window 变量都不行。但可以通过 `app.config.globalProperties` 为应用添加全局变量。

### RP- 参数属性限制

绑定的参数属性会自动转为小写，如：

```js
<a :[someAttr]="value"> ... </a>
```

在组件对象中，不会存在 `someAttr` 的属性，而是 `someattr`。

## 响应式基础

### RB- 声明响应式状态

1. reactive 声明响应式对象，如果是数组，除非数组不改变，否则需要嵌套一层对象。
2. ref 声明初始值

```js
import { reactive } from 'vue'

export default {
  // `setup` is a special hook dedicated for composition API.
  setup() {
    const state = reactive({ count: 0 })
	
	function increment() {
      state.count++
    }
    // expose the state to the template
    return {
      state,
      increment
    }
  }
}
```

在 setup 函数里返回已经声明的响应式变量，就可以在模板中使用了，同样的，返回函数也可以。另一种方法是通过 `script` 标签，这样就可以不用显式返回了：

```js
<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}
</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>
```

### RB- 获取 DOM 更新后状态

当响应式变量更新状态，DOM 会自动更新，但是 DOM 更新不是同步的，而是异步的。因此，可以用全局的 `nextTick()` 函数获取当状态更新后的时间调用。

```js
import { nextTick } from 'vue'

function increment() {
  state.count++
  nextTick(() => {
    // access updated DOM
  })
}
```

### RP- 深度响应式

这意味着你的响应式变量即使是嵌套的，也能响应式的。同样可以把变量设置为浅响应式的，这是高阶用法。

```js
import { reactive } from 'vue'

const obj = reactive({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // these will work as expected.
  obj.nested.count++
  obj.arr.push('baz')
}
```

### RP-reactive 函数的局限性

1. 仅仅能用于对象，数组登集合类型，不能用于原始类型
2. 不能容易的更新响应式变量

```js
const state = reactive({ count: 0 })

// n is a local variable that is disconnected
// from state.count.
let n = state.count
// does not affect original state
n++

// count is also disconnected from state.count.
let { count } = state
// does not affect original state
count++

// the function receives a plain number and
// won't be able to track changes to state.count
callSomeFunction(state.count)
```

### RC-ref 函数

为了克服 reactive 函数的局限性，引入了 ref 函数，ref 函数支持传入任意类型的值。

```js
const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

这个 ref 函数把值存在 `value` 属性中，并且当该属性的值发生改变，会自动把该值设置为响应式的。

另外，用 ref 创建的响应式变量，无须在模板中传入 `.value` 属性，这和以前是一致的，但只适用于顶层对象，嵌套对象就不行。

```js
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ count }} <!-- no .value needed -->
  </button>
</template>
```

### RP-ref 和 reactive 的区别

![[R-Vue.png]]
1. ref 多用于原始值，本质是对 reactive 的二次封装，原理是 `defineProperty`。reactive 多用于对象数组，是深层次的响应式原理是 `proxy`。
2. 在 JS 中访问 ref 的值需要手动添加 `.value`，访问 reactive 不需要。在模板中是一致的。

## 计算属性

### RP- 为什么需要计算属性

1. 计算属性有缓存，对于需要大计算量进行遍历的数组，有缓存能减缓性能压力。总比每次渲染都重复计算来得强。
2. 提供对变量的二次处理。

### RP- 计算属性和方法的区别

计算属性和方法的区别在于，它会基于**响应式依赖**进行缓存，只有**响应式变量改变**才会更新。计算属性函数接受 getter 和 setter 对象作为参数。下面创建的计算属性，因为没有响应式变量，所以不会更新。

```js
const now = computed(() => Date.now())
```

### RB- 创建计算属性

- 必须要对响应式变量处理，不然计算属性就不是响应式的了。

```js
<script setup>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>
```

### RB- 可写计算属性

计算属性可以接受 getter 和 setter，使得计算属性的值可写。
- 计算属性的 getter 应该是无副作用的，避免用在异步，修改 DOM 操作。有副作用的应该用 watch
- 避免计算的值突变。计算属性是带缓存的，经常变就没意思了。

```js
<template>
  <p>
    fistName:{{firstName = "test"}}  可写属性：{{fullName}}
  </p>
</template>
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>
```

## class 和 style 绑定

由于 class 和 style 比较常用，所以有一些额外的方式进行绑定。这个时候，引号内可传入：
- 对象
- 数组
- 子组件的根节点会继承父组件的 class，如果有多个根节点，需要用 `$attrs.class` 手动指定。

### RB- class 绑定

==按对象绑定==：

```js
//提供一个对象，键作为属性名，值可以控制是否绑定
<div :class="{ active: isActive }"></div>

//对象多个属性绑定多个class
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>

//也可以直接传入一个对象的变量
<div :class="classObject"></div>
```

==按数组绑定==：数组的每个元素可以是表达式

```js
<div :class="[activeClass, errorClass]"></div>

const activeClass = ref('active')
const errorClass = ref('text-danger')

//结果
<div class="active text-danger"></div>
```

==组件继承属性绑定==

- 子组件只有一个根节点，根节点会继承引用时给的 class
- 子组件有多个根节点，都不会继承
- 显示可以指定继承，用 `$attrs.class`，这玩意儿可以用在模板的任意地方

```js
//子组件，有多个根节点
<template>
  <p class="child-comp">test</p>    <!---只有chuild-comp一个class--->
  <div>                             <!---没有class--->
    <p :class="$attrs.class">test2</p>  <!---引用时的class--->
  </div>                    
  <p :class="$attrs.class">Hi!</p>    <!---引用时的class--->
</template>
<script setup>
</script>

//父组件
<template>
  <Comp class="test2"></Comp>
</template>
<script setup>
import Comp from "./Comp.vue"
</script>
```

### RB-style 绑定

- 传对象：均可改写为响应式变量
- 传数组：均可改写为响应式变量
- 自动增加合适的 css 前缀
- 支持传入多个值，以应对浏览器兼容性问题

```js
<template>
  <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
    <p :style="{color: 'red', border: '1px solid black'}">
      传对象
    </p>
    <p :style="[{color: 'blue'}]">
      传数组
    </p>
  </div>
  
</template>
<script setup>
</script>
```

## 条件渲染

### RB- 条件渲染

```js
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

### RP-v-if 和 v-show 的区别

v-if 是判断后才渲染节点，而 v-show 是无论如何都会渲染节点，通过 css 控制是否呈现。

所以 v-if 的初始化渲染开销更大，用于不经常 toggle 的元素。

### RP-v-if 和 v-for 联用

不建议二者联用，v-if 的优先级更高。这可以把 v-for 移到 v-for 外解决。

## 列表渲染

v-for 指令：

- 用于数组
	- 可解构出 item 和 index
	- in 可用 of 替代，而这功能一致
- 用于对象
	- 可解构出 value,key,index
	- 顺序是 `Object.keys()` 的顺序，不能保证在不同平台上的实现一致
- 用于 range
- 用于组件
- 使用 key，方便 vue 追踪变更状态：vue 采取的是就地更新的策略，如果没有 key，vue 尝试就地修改/复用相同类型元素的算法。

### RB- 列表渲染

```js
<template>
<ul>
	<li v-for="(item, index) in items">
  	{{ index }} - {{ item.message }}
	</li>
</ul>
  <ul>
    <li v-for="(value, key, index) in myObject">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>
</template>
<script setup>
//import Comp from "./Comp.vue"
import {ref, reactive} from 'vue'

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
</script>
```

### RP- 列表渲染为什么要 key

==性能提升==：如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。

示例：创建一个实例，2 秒后往 `items` 数组插入数据

```js
<template>
 <p v-for="item in items" :key="item">{{item}}</p>
</template>
<script setup>
import {ref, reactive, onMounted} from 'vue'

const items = reactive(['a', 'b', 'c', 'd', 'e'])
onMounted(()=>{
  setTimeout(()=>{
    items.splice(2, 0, 'f')
  },2000)
})
</script>
```

分析下整体流程：

- 比较 A，A，相同类型的节点，进行 `patch`，但数据相同，不发生 `dom` 操作
- 比较 B，B，相同类型的节点，进行 `patch`，但数据相同，不发生 `dom` 操作
- 比较 C，F，相同类型的节点，进行 `patch`，数据不同，发生 `dom` 操作
- 比较 D，C，相同类型的节点，进行 `patch`，数据不同，发生 `dom` 操作
- 比较 E，D，相同类型的节点，进行 `patch`，数据不同，发生 `dom` 操作
- 循环结束，将 E 插入到 `DOM` 中

一共发生了 3 次更新，1 次插入操作

在使用 `key` 的情况：`vue` 会进行这样的操作：

- 比较 A，A，相同类型的节点，进行 `patch`，但数据相同，不发生 `dom` 操作
- 比较 B，B，相同类型的节点，进行 `patch`，但数据相同，不发生 `dom` 操作
- 比较 C，F，不相同类型的节点
    - 比较 E、E，相同类型的节点，进行 `patch`，但数据相同，不发生 `dom` 操作
- 比较 D、D，相同类型的节点，进行 `patch`，但数据相同，不发生 `dom` 操作
- 比较 C、C，相同类型的节点，进行 `patch`，但数据相同，不发生 `dom` 操作
- 循环结束，将 F 插入到 C 之前

一共发生了 0 次更新，1 次插入操作

可见设置 `key` 能够大大减少对页面的 `DOM` 操作，提高了 `diff` 效率

### RB- 替换响应式数组的值

有几个方法：
1. 用 reactive，但得嵌套一层对象，如下代码
2. 用 reactive，只能在特定的方法里才能触发更新，如 `shift,push,pop`
3. 用 ref，但赋值的时候要 `items.value = items.value.filter()` 这样写

```js
<template>
	<p v-for="(item, index) in items.arr" :key="index">
    {{index}}-{{item.name}}
  </p>
  <button @click="addItem">
    添加
  </button>
</template>
<script setup>
import {reactive, ref} from 'vue'

let items = reactive({arr:[{id: 1, name: "张三"},{id: 2, name: "李四"}, {id: 3, name: "王五"}]})

function addItem(){
  items.arr = [{id: 0, name: "test"}]
  console.log(items)
}
</script>
```

如上，如果不嵌套，addItem 方法里就只能用数组方法改变数组，而不能赋值。赋了值也不是响应式的。另一个方法是用 ref，效果一样。

### RB- 组件上使用 v-for

```js
//App.vue
<template>
	<Comp v-for="title in titles" :title="title"></Comp>
</template>
<script setup>
import {reactive, ref} from 'vue'
import Comp from './Comp.vue'

const titles = ref(["test1","test2","test3"])

//Comp.vue
<template>
  <p>{{title}}</p>
</template>
<script setup>
import {defineProps} from 'vue'

defineProps(["title"])
</script>
</script>
```

### RP- 为什么组件上的 v-for 需要手动绑定值

不自动将数据注入组件的原因是，这使得组件与 v-for 的工作方式紧密耦合。明确其数据的来源使组件在其他情况下可重用。

### RB- 列表渲染触发更新的数组方法

如果不使用下列变量，将不会触发自动更新：
- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

## 事件处理

### RB- 事件绑定

两种方式：内联和方法，方法自带 event 参数

```js
//内联
//template
<button @click="count++">Add 1</button>
<p>Count is: {{ count }}</p>
//script
const count = ref(0)

//方法
//template
<button @click="greet">Greet</button>
//script
const name = ref('Vue.js')

function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}
```

如果要访问原生 DOM 事件，传参方式如下：

```js
<!-- using $event special variable -->
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

<!-- using inline arrow function -->
<button @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button>

//script
function warn(message, event) {
  // now we have access to the native event
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
```

### RB- 事件修饰符

- `.stop`
- `.prevent`
- `.self`
- `.capture`
- `.once`
- `.passive`：触摸事件，提升移动端性能

```js
<!-- the click event's propagation will be stopped -->
<a @click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form @submit.prevent></form>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div @click.self="doThat">...</div>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<div @click.capture="doThis">...</div>

<!-- the click event will be triggered at most once -->
<a @click.once="doThis"></a>

<!-- the scroll event's default behavior (scrolling) will happen -->
<!-- immediately, instead of waiting for `onScroll` to complete  -->
<!-- in case it contains `event.preventDefault()`                -->
<div @scroll.passive="onScroll">...</div>
```

### RB- 键修饰符

- `.exact` 修饰符允许控制触发事件所需的系统修饰符的精确组合。
- `.left`：左键
- `right`：右键
- `.middle`：中键

```js
<!-- only call `vm.submit()` when the `key` is `Enter` -->
<input @keyup.enter="submit" />
<input @keyup.page-down="onPageDown" />

<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>

<!-- this will fire even if Alt or Shift is also pressed -->
<button @click.ctrl="onClick">A</button>

<!-- this will only fire when Ctrl and no other keys are pressed -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- this will only fire when no system modifiers are pressed -->
<button @click.exact="onClick">A</button>
```

## 表单绑定

- 输入框
- 多行输入框 `textarea`
- 选择框
- 多选选择框
- 单选按钮
- 下拉选择框
- 下拉多选框

### RB- 基础表单绑定

```js
<template>
  <h1>
    input box
  </h1>
  <p>{{state}}</p>
  <input type="text" v-model="state"/>
  <div>
    <h1>Multiline message</h1>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
  </div>
  <div>
    <h1>
      checkbox
    </h1>
     <input type="checkbox" id="checkbox" v-model="checked" />
     <label for="checkbox">{{ checked }}</label>
  </div>
  <div>
    <h1>checkbox bind a array</h1>
    Checked names: {{ checkedNames }} <br/>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
  </div>
  <div>
    <h1>
      radio
    </h1>
    <div>Picked: {{ picked }}</div>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>

    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
  </div>
  <div>
  	<h1>select</h1>
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <div>multiSelected: {{ multiSelected }}</div>
    <select v-model="multiSelected" multiple>
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>
<script setup>
import {reactive, ref} from 'vue'

const state = ref("test")
const message = ref("message")
const checked = ref(false)
const checkedNames = ref([])
const picked = ref("One")
const selected =ref("A")
const multiSelected = ref([])
</script>
```

### RB- 表单值绑定

这个说的是，表单选择的值，和实际获得的值可以控制。比如下拉框选的 `ABC`，选 `ABC` 实际上选的是设置的值。其中 checkbox 的设置有点不一样。

- 控制表单选择的值和实际获取的值
- 动态绑定表单获取的值

```js
<template>
<!-- `picked` is a string "a" when checked -->
 <p>{{picked}}</p>
<input type="radio" v-model="picked" value="a" />
<input type="radio" v-model="picked" value="b" />
  
<!-- `toggle` is either true or false -->
<p>{{toggle}}</p>
<input type="checkbox" v-model="toggle" true-value="yes" false-value="no"/>
<p>{{dynamicToggle}}</p>
<input
  type="checkbox"
  v-model="dynamicToggle"
  :true-value="dynamicTrueValue"
  :false-value="dynamicFalseValue" />

<!-- `selected` is a string "abc" when the first option is selected -->
 <p>{{selected}}</p>
<select v-model="selected">
  <option value="abc">ABC</option>
  <option value="bcd">BCD</option>
</select>

<br/>
  <p>{{dynamicSelected}}</p>
<select v-model="dynamicSelected">
  <!-- inline object literal -->
<option :value="{ number: 123 }">123</option>
</select>
  
</template>
<script setup>
import {reactive, ref} from 'vue'

const picked = ref("a")
const toggle = ref(true)
const dynamicToggle = ref(true)
const selected = ref("abc")
const dynamicSelected = ref({number: 123})

const dynamicTrueValue = "动态真值"
const dynamicFalseValue = "动态假值"
</script>
```

### RC- 表单绑定修饰符

- `.lazy`：表单填写不是实时变化的，而是有改变才会变化
- `.number`：自动将用户输入用 `parseFloat()` 解析，如果解析不了就获取到原值。如果 input 的 `type="number`，效果一样。
- `.trim`

```js
<!-- synced after "change" instead of "input" -->
<input v-model.lazy="msg" />
```

## RC- 生命周期钩子

- onBeforeMount()
- onMounted()
- onBeforeUpdate()
- onUpdated()
- onBeforeUnmount()
- onUnmounted()
- onErrorCaptured()

![Vue生命周期|700](https://vuejs.org/assets/lifecycle.16e4c08e.png)

## RC-Watcher

计算属性允许我们以声明方式计算派生值。但是，在某些情况下，我们需要对状态更改做出反应来执行“副作用” - 例如，改变 DOM，或根据异步操作的结果更改另一段状态。

### RB-wacher 基本用法

这个 watch 是深度 watch 的，即能 watch 对象的嵌套的属性，这在大型数据结构上会有性能影响，注意使用。

watch 函数的第一个参数是能 watch 的对象，第二个参数是回调函数，有 newValue 和 oldValue 参数，第三个参数是可选参数，表明是否是 deep watch，`{deep: true}`。

能 watch 的对象有：
- ref
- reactive
- getter function
- an array of multiple sources
- 不要 watch reactive 的属性，如果需要，用 getter 函数

```js
const x = ref(0)
const y = ref(0)

// single ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// array of multiple sources
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})

const obj = reactive({ count: 0 })

// this won't work because we are passing a number to watch()
watch(obj.count, (count) => {
  console.log(`count is: ${count}`)
})
// instead, use a getter:
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  }
)
```

### RB-watcher 异步请求

```js
<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</template>
```

### RC-watchEffect

watch() 是惰性的：在监视的源发生更改之前不会调用回调。但在某些情况下，我们可能希望急切地运行相同的回调逻辑——例如，我们可能希望获取一些初始数据，然后在相关状态发生变化时重新获取数据

watchEffect 仅在其同步执行期间跟踪依赖项。将其与异步回调一起使用时，将仅跟踪在第一个等待刻度之前访问的属性。

### RC-watch 回调刷新时间

如果你想在 Vue 更新后在 watcher 回调中访问 DOM，你需要指定 `flush: 'post'` 选项：

```js
watch(source, callback, {
  flush: 'post'
})

watchEffect(callback, {
  flush: 'post'
})

//watchEffect()有个方便的语法糖
import { watchPostEffect } from 'vue'

watchPostEffect(() => {
  /* executed after Vue updates */
})
```

### RB- 停止 watcher

在 `setup()` 中同步声明的 watcher,在卸载组件时自动停止。   这里的关键是必须同步创建 watcher：如果在异步回调中创建 watcher，则不会将其绑定到自身组件，并且必须手动停止以避免内存泄漏。下面是一个示例：

```js
<script setup>
import { watchEffect } from 'vue'

// this one will be automatically stopped
watchEffect(() => {})

// ...this one will not!
setTimeout(() => {
  watchEffect(() => {})
}, 100)
</script>
```

停止 watcher 的方式：

```js
const unwatch = watchEffect(() => {})

// ...later, when no longer needed
unwatch()
```

## 模板 ref

### RC- 模板 ref

虽然 Vue 的声明式渲染模型为您抽象了大部分直接 DOM 操作，但在某些情况下，我们可能仍然需要直接访问底层 DOM 元素。为此，我们可以使用特殊的 ref 属性：ref 是一个特殊属性，类似于 v-for 章节中讨论的 key 属性。它允许我们在挂载后获得对特定 DOM 元素或子组件实例的直接引用。例如，当您希望以编程方式将输入集中在组件安装上，或者在元素上初始化第三方库时，这可能很有用。

- 标签 ref：访问 tag
- v-for ref：包好标签的数组
- 函数 ref：在组件更新时会调用
- 组件 ref：如果子组件使用 Options API 或不使用 `<script setup>`;，引用的实例将与子组件的 this 相同，这意味着父组件将完全访问子组件的每个属性和方法。这使得在父子之间创建紧密耦合的实现细节变得容易，因此组件引用应该只在绝对需要时使用 - 在大多数情况下，您应该尝试使用 props 和触发事件的方式使得父子组件交互。如果是 `<srcipr setup>`，就需要调用 `defineExpose` 暴露子组件的属性和方法。

### RB- 创建并使用模板 ref

```js
<template>
	<p ref="pRef">
    李白
  </p>
</template>
<script setup>
import {ref, onMounted} from 'vue'

const pRef = ref(null) 
onMounted(()=>{
  console.log(pRef)
  pRef.value.innerText = "test"
})
</script>
```

对于包含 v-for 的标签，也能使用 ref，初始化传入空数组就行。

函数 ref：

```js
<template>
	<p :ref="pRef">
    李白
  </p>
</template>
<script setup>
import {ref, onMounted} from 'vue'

const pRef = ()=>{
  console.log("hello world")
}
</script>
```

组件 ref：

```js
//父组件
<template>
  <Comp ref="compRef"></Comp>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import Comp from './Comp.vue'
  
const compRef = ref(null)
onMounted(()=>{
  console.log(compRef.value) //包含title的Proxy
})
</script>

//子组件
<template>
  <p>{{title}}</p>
</template>
<script setup>
import {reactive, defineExpose} from 'vue'

const title = reactive("test")
defineExpose({title})
</script>
```

## 组件基础

### RB- 定义一个组件

- 单文件组件定义组件
- JavaScript 对象定义组件

```js
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
  // or `template: '#my-template-element'`
}
```

### RC- 命名法

- 小驼峰命名法 `camelCase`： printEmployeePaychecks()；
- 短横线命名法 `kebab-case`：print-employee-paychecks()
- 帕斯卡命名法/大驼峰 `PascalCase`：DisplayInfo();

### RB- 组件 props 传参

`<script setup>` 方式：

```js
//子组件
<script setup>
defineProps(['title'])
</script>

<template>
  <h4>{{ title }}</h4>
</template>


//父组件
<template>
	<BlogPost title="My journey with Vue" />
</template>
<script setup>

</script>
```

`setup` 方式：

```js
export default {
  props: ['title'],
  setup(props) {
    console.log(props.title)
  }
}
```

### RB- 组件事件绑定

思路：
1. 子组件中触发一个事件，然后通过 `$emit()` 的方式发出一个新的事件名称
2. 父组件监听这个新的事件名称，然后回调

```js
//点击子组件的按钮触发click事件，然后发送一个enlarge-text事件给父组件，父组件监听该事件后回调
//子组件
<script setup>
defineProps(['title'])
defineEmits(['enlarge-text'])
</script>

<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>


//父组件
<script setup>
import { ref } from 'vue'
import BlogPost from './BlogPost.vue'
  
const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

const postFontSize = ref(1)
</script>

<template>
	<div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    ></BlogPost>
  </div>
</template>
```

### RB- 插槽内容转发

就相当于放了个占位符

```js
//父组件
<script setup>
import AlertBox from './AlertBox.vue'
</script>

<template>
	<AlertBox>
  	Something bad happened.
	</AlertBox>
</template>

//子组件
<template>
  <div class="alert-box">
    <strong>Error!</strong>
    <br/>
    <slot />
  </div>
</template>

<style scoped>
.alert-box {
  color: #666;
  border: 1px solid red;
  border-radius: 4px;
  padding: 20px;
  background-color: #f8f8f8;
}
  
strong {
	color: red;    
}
</style>
```

### RB- 动态组件

特殊的 `component` 标签，具有特殊的 is 属性，能传组件名称，渲染对应的组件。当使用 `< component: is = “ ...”>` 在多个组件之间进行切换时，可以使用内置的 `<keepalive>` 组件强制非活动组件保持“alive”。

```js
<script setup>
import Home from './Home.vue'
import Posts from './Posts.vue'
import Archive from './Archive.vue'
import { ref } from 'vue'
 
const currentTab = ref('Home')

const tabs = {
  Home,
  Posts,
  Archive
}
</script>

<template>
  <div class="demo">
    <button
       v-for="(_, tab) in tabs"
       :key="tab"
       :class="['tab-button', { active: currentTab === tab }]"
       @click="currentTab = tab"
     >
      {{ tab }}
    </button>
	  <component :is="tabs[currentTab]" class="tab"></component>
  </div>
</template>
```

### RP- 组件名称大小写不敏感

浏览器会自动把标签转为小写，所以，在 HTML 中，用大驼峰和小驼峰的组件名和事件名的等价的短横线形式，在字符串模板中，可以用驼峰的形式。

### RB-Vue 中命名的最佳实践

这一切都建立在单文件组件中，不适用于 html 中：
- 组件：大驼峰，但也支持短横线，二者引用等价
- props：js 的地方用小驼峰，模板和 html 里推荐用短横线，以使得和 html 的标准保持一致
- 事件：js 的地方用小驼峰，模板和 html 里推荐用短横线，以使得和 html 的标准保持一致

```js
//父组件
<template>
  <Comp test-title="test title"></Comp>
</template>
<script setup>
import Comp from './Comp.vue'
</script>

//子组件
<template>
  {{testTitle}}
</template>
<script setup>
import {defineProps} from 'vue'

defineProps(['testTitle'])
</script>
```

# 深入组件

## 注册组件

### RB- 注册组件

- 全局注册：一种是在入口文件注册，另一种是在 SFC 中注册（因为组件中能访问根实例 app）
- 局部注册：setup 直接 import 就行，而 option api 需要一个 components 的对象

```js
//入口文件注册
import { createApp } from 'vue'

const app = createApp({})

app.component(
  // the registered name
  'MyComponent',
  // the implementation
  {
    /* ... */
  }
)

//SFC中注册
import MyComponent from './App.vue'
app.component('MyComponent', MyComponent)
```

### RP- 全局注册和局部注册的区别

1. 全局注册不能用 `tree shaking`
2. 全局注册使大型应用进程中的依赖关系不那么明确。这使得很难从使用它的父组件中找到子组件的实现。这可能会影响长期可维护性，类似于使用过多的全局变量。

## Props

### RB- 声明 props

- 数组方式
- 对象方式

```js
//数组方式
<script setup>
const props = defineProps(['foo'])

console.log(props.foo)
</script>

//对象方式
defineProps({
  title: String,
  likes: Number
})

//typescript写法
<script setup lang="ts">
defineProps<{
  title?: string
  likes?: number
}>()
</script>
```

### RB- 使用 props

- 不带冒号的绑定：声明值为字符串，而不是将其看作表达式
- 可以用对象一次性绑定多个属性

```js
//声明一个对象
const post = {
  id: 1,
  title: 'My Journey with Vue'
}
//绑定
<BlogPost v-bind="post" />

//相当于
<BlogPost :id="post.id" :title="post.title" />
```

### RP- 单向数据流

所有 props 在子属性和父属性之间形成单向向下绑定：当父属性更新时，它将向向子属性，但不会流向子属性。这可以防止子组件意外改变父组件的状态，这可能会使应用的数据流更难理解。另外，每次父组件更新时，子组件中的所有 props 都会被刷新为最新的值。这意味着您不应该尝试改变子组件内的 Props。如果你这样做了，Vue 会在控制台中警告你。

待完善

### prop 验证

- type
- require
- default
- validator

```js
defineProps({
  // Basic type check
  //  (`null` and `undefined` values will allow any type)
  propA: Number,
  // Multiple possible types
  propB: [String, Number],
  // Required string
  propC: {
    type: String,
    required: true
  },
  // Number with a default value
  propD: {
    type: Number,
    default: 100
  },
  // Object with a default value
  propE: {
    type: Object,
    // Object or array defaults must be returned from
    // a factory function. The function receives the raw
    // props received by the component as the argument.
    default(rawProps) {
      return { message: 'hello' }
    }
  },
  // Custom validator function
  propF: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  // Function with a default value
  propG: {
    type: Function,
    // Unlike object or array default, this is not a factory function - this is a function to serve as a default value
    default() {
      return 'Default function'
    }
  },
  //typescript interface or class
  propsH: Person
})

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}
```

## 事件

### RP-vue 中自定义事件不会冒泡

组件发出的事件不会冒泡。您只能侦听直接子组件发出的事件。

### RB- 事件传参

- 子组件的事件是在父组件引用的地方监听的，如下：只能在 Comp 标签上监听
- 回调函数可以选择内联或者方法，内联的方法不必传参，只用放个方法名就好了

```js
//父组件
<template>
  <div>
    {{count}}
  <Comp @add-count="(number)=>{ count += number}"></Comp>
  </div>
</template>
<script setup>
import Comp from './Comp.vue'
import {defineEmits, ref} from 'vue'

const count = ref(0)
defineEmits(["addCount"])
</script>

//子组件
<template>
  <button @click="$emit('addCount', 1)">加一</button>
</template>
<script setup>
</script>
```

### RB- 声明触发事件

- 可以数组
- 可以对象

```js
//script setup
//数组方式
<script setup>
const emit = defineEmits(['inFocus', 'submit'])
</script>

//对象方式：这里还展示了参数验证
<script setup>
const emit = defineEmits({
  submit(payload) {
    // return `true` or `false` to indicate
    // validation pass / fail
  }
})
</script>


//setup：这种方式在setup中通过传参的方式传递emits
export default {
  emits: ['inFocus', 'submit'],
  setup(props, ctx) {
    ctx.emit('submit')
  }
}
```

typescript:

```js
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
</script>
```

### RB- 事件参数验证

```js
<script setup>
const emit = defineEmits({
  // No validation
  click: null,

  // Validate submit event
  submit: ({ email, password }) => {
    if (email && password) {
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  }
})

function submitForm(email, password) {
  emit('submit', { email, password })
}
</script>
```

### RB- 组件的 v-model

实现组件内部的值和组件外部双向绑定，有两种方法，绑定的名称也可以变，默认是 modelValue：
- 双向绑定的值 `modelValue` 是默认的
- 自定义事件名称 `update:modelValue` 也是默认的
- 可以换绑定的名称

```js
<MyComponent v-model:title="bookTitle" />

<script setup>
defineProps(['title'])
defineEmits(['update:title'])
</script>

<template>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
```

第一种：
1. 定义自定义事件 `update:modelValue`
2. 子组件中，input 事件触发自定义 `update:modelValue` 事件，传递当前输入的值为参数
3. 定义 Props`modelValue`
4. 子组件中，绑定 input 的值为 `modelValue`
5. 父组件中，可以在组件上使用 v-model

```js
//父组件
<script setup>
import { ref } from 'vue'
import CustomInput from './CustomInput.vue'
  
const message = ref('hello')
</script>

<template>
  <CustomInput v-model="message" /> {{ message }}
</template>

//子组件
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```

另一种方法：
1. 定义自定义事件 `update:modelValue`
2. 定义 Props`modelValue`
3. 定义一个计算属性 value，然后子组件的 input 双向绑定到 `value`

```js
//父组件
<script setup>
import { ref } from 'vue'
import CustomInput from './CustomInput.vue'
  
const message = ref('hello')
</script>

<template>
  <CustomInput v-model="message" /> {{ message }}
</template>

//子组件
<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input v-model="value" />
</template>
```

### RB- 自定义 v-model 修饰符

相比于没修饰符的 v-model：
- `defineProps` 多了个 modelValue 类型声明和 modelModifiers 对象，不知道这么写是必要的吗？
- input 触发的事件名是一个函数，这个函数读取事件的 value，然后 `emit('update:modelValue')`

```js
//父组件
<script setup>
import { ref } from 'vue'
import MyComponent from './MyComponent.vue'
  
const myText = ref('')
</script>

<template>
  This input capitalizes everything you enter:
  <MyComponent v-model.capitalize="myText" />
</template>

//子组件
<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) }
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
  let value = e.target.value
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
</script>

<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>
```

## fallthrough 属性

这个部分主要讲的是 class、style、id、事件它们在使用组件中的继承。

### RC-fallthrough 属性

“fallthrough 属性”是传递给组件的属性或 v-on 事件侦听器，但未在接收组件的 props 或发出中显式声明。这方面的常见示例包括类、样式和 id 属性。

### RP-class/style/事件在组件中的表现

==属性继承==：

```js
//组件模板
<button>click me</button>
//组件调用
<MyButton class="large" />

//最终渲染结果
<button class="large">click me</button>
```

==class 和 style 合并==：

```js
//组件模板
<button class="btn">click me</button>
//组件调用
<MyButton class="large" />

//最终渲染结果
<button class="btn large">click me</button>
```

==事件继承==：

事件继承和属性继承是一样的，组件调用时绑定事件：
- 如果组件只有一个根节点，那么事件会继承到这个根节点中，根节点如果额外绑定了其它事件，那么所有事件都会触发
- 如果组件有多个节点，那么事件继承需要显示 `@click="$attrs.onClick"` 指定需要继承的节点

```js
//组件调用
<template>
	<Comp class="test" @click="console.log('test')"></Comp>
</template>
<script setup>
import Comp from './Comp.vue'
</script>

//组件模板
<template>
  <div>
  <div>
    {{btn1}}-{{btn2}}
  </div>
  <button :class="$attrs.class"  @click="$attrs.onClick">btn1</button>
  <button @click="btn1 = 'test'">btn2</button>
        
  </div>
</template>

<script setup>
import {ref} from 'vue'
  
const btn1 = ref('btn1')
const btn2 = ref('btn2')

</script>
```

### RB- 禁用属性继承

- 用 `<script setup>` 需要额外的 `script` 来禁用该选项，如下：

```js
<script>
// use normal <script> to declare options
export default {
  inheritAttrs: false
}
</script>

<script setup>
// ...setup logic
</script>
```

### RC-$attrs 属性

这个变量用来传递组件模板和组件调用时的属性，当组件调用时的所有除 props 和 emit 属性，都会保存到这个变量中。

可以通过 `v-bind:"$attrs"` 实现属性继承：

```js
<div class="btn-wrapper">
  <button class="btn" v-bind="$attrs">click me</button>
</div>
```

### RB- 获取 fallthrough 属性

请注意，尽管此处的 attrs 对象始终反映最新的回退属性，但它不是响应式式的（出于性能原因）。不能使用 watch 来观察其更改。如果您需要响应式，请使用 props。或者，您可以使用 `onUpdated()` 在每次更新时使用最新的 attrs 执行副作用。

```js
<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>
```

## 插槽

### RC- 插槽 slot

我们已经了解到，组件可以接受 props，它可以是任何类型的 JavaScript 值。但是模板内容呢？在某些情况下，我们可能希望将模板片段传递给子组件，并让子组件在其自己的模板中呈现该片段。

插槽就相当于在子组件的模板中的占位符，在调用时可以传递组件在此处渲染。在模板字符串中，甚至可以是变量。

```js
// parent component passing slot content
FancyButton('Click me!')

// FancyButton renders slot content in its own template
function FancyButton(slotContent) {
  return (
    `<button class="fancy-btn">
      ${slotContent}
    </button>`
  )
}
```

这个概念来源于 HTML 的 `slot` 标签。

### RB- 创建插槽

- 调用插槽不能访问子组件的作用域

```js
//组件调用
<script setup>
import FancyButton from './FancyButton.vue'
</script>

<template>
  <FancyButton>
    Click me <!-- slot content -->
 	</FancyButton>
</template>


//子组件
<template>
  <button class="fancy-btn">
  	<slot/> <!-- slot outlet -->
	</button>
</template>

<style>
.fancy-btn {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
```

### RC- 默认插槽

当调用组件时，插槽内没内容时显示的内容。

### RB- 创建默认插槽

实际上就是在插槽的占位处放上想要默认显示的内容。

```js
//调用组件
<script setup>
import SubmitButton from './SubmitButton.vue'
</script>

<template>
  <!-- use fallback text -->
  <SubmitButton />
  
  <!-- provide custom text -->
  <SubmitButton>Save</SubmitButton>
</template>

//子组件
<template>
  <button type="submit">
	  <slot>
    	Submit <!-- fallback content -->
  	</slot>
	</button>
</template>
```

### RC- 具名插槽

给插槽分配个 name 属性，当接收到对应的插槽，放到对应的占位符处。

![](https://vuejs.org/assets/named-slots.ebb7b207.png)

### RB- 具名插槽的使用

- 插槽内容为 `<template #header>` 形式，占位处的 slot 对了 name 属性。
- 动态具名插槽

```js
//组件调用
<script setup>
import BaseLayout from './BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <template #header>
      <h1>Here might be a page title</h1>
    </template>

    <template #default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </BaseLayout>
</template>

//子组件
<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style>
  footer {
    border-top: 1px solid #ccc;
    color: #666;
    font-size: 0.8em;
  }
</style>
```

==动态具名插槽==

```js
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>

  <!-- with shorthand -->
  <template #[dynamicSlotName]>
    ...
  </template>
</base-layout>
```

### RP- 插槽作用域

一般情况，插槽的作用域都在组件调用的那个组件内，不可以访问子组件内的作用域。vue 提供插槽传参的方案：
- v-slot 命令插槽传参
- 具名插槽传参

### RB- 插槽传参

- 这相当于把子组件内的参数带到了父组件中。
- 解构传值：我们也可以把 `v-slot` 解构传值。

==一般插槽传参==:

```js
//父组件
<script setup>
import MyComponent from './MyComponent.vue'
</script>

<template>
	<MyComponent v-slot="slotProps">
  	{{ slotProps.text }} {{ slotProps.count }}
  </MyComponent>
</template>

//解构传值
<MyComponent v-slot="{ text, count }">
  {{ text }} {{ count }}
</MyComponent>


//子组件
<script setup>
const greetingMessage = 'hello'
</script>

<template>
  <div>
  	<slot :text="greetingMessage" :count="1"></slot>
	</div>
</template>
```

==具名插槽传参==:

```js
<MyComponent>
  <template #header="headerProps">
    {{ headerProps }}
  </template>
  <template #default="defaultProps">
    {{ defaultProps }}
  </template>
  <template #footer="footerProps">
    {{ footerProps }}
  </template>
</MyComponent>

<slot name="header" message="hello"></slot>
```

### RH- 插槽用例

![[R-Vue-1.png]]
它呈现一个项目列表 - 它可能封装了用于加载远程数据的逻辑，使用数据显示列表，甚至是高级功能，如分页或无限滚动。但是，我们希望它对每个项目的外观具有灵活性，并将每个项目的样式留给使用它的父组件。因此，所需的用法可能如下所示：

```js
//父组件
<script setup>
import FancyList from './FancyList.vue'
</script>

<template>
  <FancyList :api-url="url" :per-page="10">
    <template #item="{ body, username, likes }">
      <div class="item">
        <p>{{ body }}</p>
        <p class="meta">by {{ username }} | {{ likes }} likes</p>
      </div>
    </template>
  </FancyList>
</template>

<style scoped>
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>

//子组件
<script setup>
import { ref } from 'vue'

const props = defineProps(['api-url', 'per-page'])

const items = ref([])

// mock remote data fetching
setTimeout(() => {
  items.value = [
    { body: 'Scoped Slots Guide', username: 'Evan You', likes: 20 },
	  { body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10 }
  ]
}, 1000)
</script>

<template>
  <ul>
    <li v-if="!items.length">
      Loading...
    </li>
    <li v-for="item in items">
      <slot name="item" v-bind="item"/>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style-type: none;
    padding: 5px;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
  }
  li {
    padding: 5px 20px;
    margin: 10px;
    background: #fff;
  }
</style>
```

零渲染组件：
我们可以提出只封装逻辑而不自己渲染任何东西的组件 - 视觉输出完全委托给具有作用域插槽的消费者组件。我们称这种类型的组件为无渲染组件。使用无渲染组件可以实现的大部分功能都可以通过组合 API 以更有效的方式实现，而不会产生额外组件嵌套的开销。

这个例子是实时显示鼠标坐标：

```js
//父组件
<script setup>
import MouseTracker from './MouseTracker.vue'
</script>

<template>
	<MouseTracker v-slot="{ x, y }">
  	Mouse is at: {{ x }}, {{ y }}
	</MouseTracker>
</template>

//子组件
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
  
const x = ref(0)
const y = ref(0)

const update = e => {
  x.value = e.pageX
  y.value = e.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>

<template>
  <slot :x="x" :y="y"/>
</template>
```

## Provide/Inject

### RC-Provide/Inject

通常，组件向下传递参数用 props，但是对于很深的组件这样传递耦合性强，不利于复用，同时也过于复杂。所以 Provide 和 Inject 就是来解决这类问题的。

### RB-Provide 的使用

- provide 接受两个参数，第一个参数是 provide 的键名，第二个是值。需要在 setup 里声明
- provide 可以声明在全局：app.provide
- 默认情况下，inject 假定在父链中的某处提供了注入的键。在未提供键的情况下，将出现运行时警告。如果想要可选的 provide，提供一个 default value 就行
- 工厂函数默认值

==一般使用==:

```js
//provide
<script setup>
import { provide } from 'vue'

provide(/* key */ 'message', /* value */ 'hello!')
</script>

//inject
<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>
```

==可选 provide==:

```js
// `value` will be "default value"
// if no data matching "message" was provided
const value = inject('message', 'default value')
```

在某些情况下，可能需要通过调用函数或实例化新类来创建默认值。为了避免不必要的计算或副作用，在不使用可选值的情况下，我们可以使用工厂函数来创建默认值：

==工厂函数默认值==:

```js
const value = inject('key', () => new ExpensiveClass())
```

==一个完整的例子==:

```js
<!-- inside provider component -->
<script setup>
import { provide, ref } from 'vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>

<!-- in injector component -->
<script setup>
import { inject } from 'vue'

const { location, updateLocation } = inject('location')
</script>

<template>
  <button @click="updateLocation">{{ location }}</button>
</template>
```

## 异步组件

### RB- 创建异步组件

- loader 函数
- ES module 动态引入

```js
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    // ...load component from server
    resolve(/* loaded component */)
  })
})
// ... use `AsyncComp` like a normal component
```

ES 模块动态导入也返回一个 Promise，所以大部分时候我们会结合 defineAsyncComponent 来使用。 Vite 和 webpack 等打包工具也支持该语法，因此我们可以使用它来导入 Vue SFC：

```js
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)
```

### RB- 异步组件错误处理

如果提供了加载组件，它将在加载内部组件时首先显示。在显示加载组件之前有一个默认的 200 毫秒延迟 - 这是因为在快速网络上，即时加载状态可能会被替换得太快并最终看起来像闪烁。如果提供了错误组件，当 loader 函数返回的 Promise 被拒绝时会显示。您还可以指定超时以在请求花费太长时间时显示错误组件。

```js
const AsyncComp = defineAsyncComponent({
  // the loader function
  loader: () => import('./Foo.vue'),

  // A component to use while the async component is loading
  loadingComponent: LoadingComponent,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,

  // A component to use if the load fails
  errorComponent: ErrorComponent,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000
})
```

# 复用能力

## 组合式函数

### RC- 组合式函数

在构建前端应用进程时，我们经常需要重用逻辑来完成常见任务。例如，我们可能需要在许多地方格式化日期，因此我们为此提取可重用的函数。此格式化进程函数封装无状态逻辑：它接受一些输入并立即返回预期的输出。相比之下，有状态逻辑涉及管理随时间变化的状态。一个简单的示例是跟踪鼠标在页面上的当前位置。在实际方案中，它也可能是更复杂的逻辑，例如触摸手势或与数据库的连接状态。

说白了就是利用 vue 的 api 封装一些常用的逻辑。

### RB- 组合式函数示例

==鼠标跟踪器==

```js
<script setup>
import { useMouse } from './mouse.js'

const { x, y } = useMouse()
</script>

<template>
  Mouse position is at: {{ x }}, {{ y }}
</template>


//组合式函数
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y }
}
```


==异步状态==



## 自定义指令

## 插件
