const assert = require('chai').assert;
const Pager = require('../lib/pager');

describe('pager test', () => {
    it('logic test', done => {
        //第一页，每页20条，一共100条
        const pager = new Pager([], 1, 20, 100);

        assert.equal(5, pager.totalPages());
        assert.isNotTrue(pager.hasPrevious());
        assert.isTrue(pager.hasNext());
        assert.equal(2, pager.next);
        assert.isTrue(pager.isFirst());
        console.log(pager.pages());

        //第一页，每页5条，只有2条记录
        const pager1 = new Pager([],1,5,2);
        console.log('pager1=> '+pager1.pages());

        const pager2 = new Pager([],0,5,0);
        console.log('pager2=> '+pager2.pages());

        done();
    });
});
