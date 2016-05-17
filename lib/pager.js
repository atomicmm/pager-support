const range = require('lodash/range');
/**
 * 通用的分页逻辑
 * 页码以1为基准
 */
class Pager {

    constructor(content, current, pageSize, total) {
        this._content = content;
        this._current = current;
        this._pageSize = pageSize;
        this._total = total;

        this.pages = this.pages.bind(this);
        this.isFirst = this.isFirst.bind(this);
        this.isLast = this.isLast.bind(this);
        this.hasNext = this.hasNext.bind(this);
    }


    //总记录数
    get totalElements() {
        return this._total;
    }

    //当前页上的记录数
    get numberOfElement() {
        return this._content.length;
    }

    //当前页码
    get currentPage() {
        return this._current;
    }

    //每页记录数
    get pageSize() {
        return this._pageSize;
    }

    //总页数
    totalPages() {
        return this._pageSize === 0 ? 1 : Math.ceil(this._total / this._pageSize);
    }

    isLast() {
        return !this.hasNext();
    }

    isFirst() {
        return !this.hasPrevious();
    }

    hasPrevious() {
        return this._current > 1;
    }

    hasNext() {
        return this._current < this.totalPages();
    }

    //下一页的页码
    get next() {
        return this._current + 1;
    }
    get previous() {
        return this._current - 1;
    }

    //简单获取中间分页单页码array格式
    pages(max = 10) {
        if (!this._pages) {
            const total = this.totalPages();
            this._pages = range(1, max > total ? total + 1 : max);
        }

        return this._pages;
    }

    get content() {
        return this._content;
    }
}

module.exports = Pager;
