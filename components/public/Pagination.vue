<template>
  <ul @click="onPagerClick" class="pagination">
    <li
      class="iconfont icon-back"
      v-if="pageCount > 1"
      ></li>
    <li
      :class="{ active: currentPage === 1, disabled }"
      v-if="pageCount > 1"
      class="number">1</li>
    <li
      class="iconfont more icon-more-dot btn-quickprev"
      :class="[quickprevIconClass, { disabled }]"
      v-if="showPrevMore"
      @mouseenter="onMouseenter('left')"
      @mouseleave="quickprevIconClass = 'icon-more-dot'">
    </li>
    <li
      v-for="pager in pagers"
      :key="pager"
      :class="{ active: currentPage === pager, disabled }"
      class="number">{{ pager }}</li>
    <li
      class="iconfont more icon-more-dot btn-quicknext"
      :class="[quicknextIconClass, { disabled }]"
      v-if="showNextMore"
      @mouseenter="onMouseenter('right')"
      @mouseleave="quicknextIconClass = 'icon-more-dot'">
    </li>
    <li
      :class="{ active: currentPage === pageCount, disabled }"
      class="number"
      v-if="pageCount > 1">{{ pageCount }}
    </li>
    <li
      class="iconfont icon-forword"
      v-if="pageCount > 1">
    </li>
  </ul>
</template>

<script type="text/babel">
  export default {
    name: 'ElPager',
    data () {
      return {
        disabled: false,
        current: null,
        showPrevMore: false,  // 是否显示前一个更多
        showNextMore: false,  // 是否显示下一个更多
        quicknextIconClass: 'icon-more-dot',  // 快速下一个样式
        quickprevIconClass: 'icon-more-dot'  // 快速下一个样式
      }
      
    },
    props: {
      total: {
        type: Number,
        default: 1
      },
      pageSize:  {
        type: Number,
        default: 10
      },
      pagerCount:  {  //页码按钮的数量，当总页数超过该值时会折叠
        type: Number,
        default: 6
      },
      currentPage:  {  // 当前页数
        type: Number,
        default: 1
      }
    },
    model: {
      prop: 'currentPage'
    },

    watch: {
      showPrevMore(val) {
        if (!val) this.quickprevIconClass = 'icon-more-arrows';
      },

      showNextMore(val) {
        if (!val) this.quicknextIconClass = 'icon-more-arrows';
      }
    },

    methods: {
      onPagerClick(event) {
        const target = event.target;
        if (target.tagName === 'UL' || this.disabled) {
          return;
        }

        let newPage = Number(event.target.textContent);   // 获取当前点击页码，即新页码
        const pageCount = this.pageCount; // 总页数
        const currentPage = this.currentPage; // 当前页数
        const pagerCountOffset = this.pagerCount - 2; // 页码移动数量

        if (target.className.indexOf('icon-back') !== -1) {
          newPage = currentPage - 1;
        }
        if (target.className.indexOf('icon-forword') !== -1) {
          newPage = currentPage + 1;
        }
        // 如果点击了更多
        if (target.className.indexOf('more') !== -1) {
          // 如果点击了后一个更多
          if (target.className.indexOf('quickprev') !== -1) {
            // 新页码 = 当前页面-页码按钮的数量
            newPage = currentPage - pagerCountOffset;
          // 如果点击了后一个更多
          } else if (target.className.indexOf('quicknext') !== -1) {
            // 新页码 = 当前页面+页码按钮的数量
            newPage = currentPage + pagerCountOffset;
          }
        }
        /* istanbul ignore if */
        // 如果新页面存在
        if (!isNaN(newPage)) {
          if (newPage < 1) {
            newPage = 1;
          }
          // 如果新页面大于总页数
          if (newPage > pageCount) {
            newPage = pageCount;
          }
        }
        // 如果新页码 不等于当前页面，重新赋值当前新页码
        if (newPage !== currentPage) {
          // this.currentPage = newPage;
          this.$emit('input', newPage);
        }
      },
      // 鼠标移动到省略号上时的样式
      onMouseenter(direction) {
        if (this.disabled) return;
        if (direction === 'left') {
          this.quickprevIconClass = 'icon-back-arrows';
        } else {
          this.quicknextIconClass = 'icon-forword-arrows';
        }
      }
    },

    computed: {
       // 总页数
      pageCount() {
        return Math.ceil(this.total / this.pageSize);
      },
      // 页码
      pagers() {
        const pagerCount = this.pagerCount; // 页码按钮的数量
        const halfPagerCount = (pagerCount - 1) / 2;

        const currentPage = Number(this.currentPage);
        const pageCount = Number(this.pageCount);

        let showPrevMore = false;
        let showNextMore = false;
        // 当总页数大于页码按钮的数量
        if (pageCount > pagerCount) {
          if (currentPage > pagerCount - halfPagerCount) {
            showPrevMore = true;
          }

          if (currentPage < pageCount - halfPagerCount) {
            showNextMore = true;
          }
        }

        const array = [];

        if (showPrevMore && !showNextMore) {
          const startPage = pageCount - (pagerCount - 2);
          for (let i = startPage; i < pageCount; i++) {
            array.push(i);
          }
        } else if (!showPrevMore && showNextMore) {
          for (let i = 2; i < pagerCount; i++) {
            array.push(i);
          }
        } else if (showPrevMore && showNextMore) {
          const offset = Math.floor(pagerCount / 2) - 1;
          for (let i = currentPage - offset ; i <= currentPage + offset; i++) {
            array.push(i);
          }
        } else {
          for (let i = 2; i < pageCount; i++) {
            array.push(i);
          }
        }

        this.showPrevMore = showPrevMore;
        this.showNextMore = showNextMore;

        return array;
      }
    }

  };
</script>
