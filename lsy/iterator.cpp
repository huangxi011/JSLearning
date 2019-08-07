#include<iostream>
using namespace std;

class LinkList {
private:
	struct node {   //链表节点定义
		int data;   //链表数据类型
		node *next;
	}*p;            //表头指针定义
	node* curP;
public:

	LinkList();
	~LinkList();

	//返回表头指针
	node * reset();

	//逐个添加链表元素，尾部添加
	void append(int element);

	bool moveNext();

};

LinkList::LinkList() {
	p = NULL;//表头指针置空
}

//逐个删除链表节点，最后将表头指针置空
LinkList::~LinkList() {
	node *q;//用于遍历的游标指针

	//链表为空
	if (p == NULL)
		return;

	//链表不为空
	while (p != NULL) {
		q = p->next;
		delete p;
		p = q;
	}
}

//获得当前链表的首部指针
LinkList::node* LinkList::reset() {
	return p;
}

//尾部逐个添加链表结点，表头指针指向第一个结点
void LinkList::append(int element) {
	node *q = p, *s;  //指针q指向p所指的位置，定义一个指针s
	s = new node;    //让指针s指向一个节点类
	if (p == NULL) {    //添加的是第一个节点
		s->data = element;
		s->next = q;
		p = s;
	}
	else {
		while (q->next != NULL) {
			q = q->next;
		}
		s->data = element;
		q->next = s;
		s->next = NULL;
		
	}
	curP = s;
}

bool LinkList::moveNext() {
	 
	if (curP->next != NULL) {
		curP = curP->next;
		return true;
	}
	else
		return false;
}


