function (element, input) {
	var listNode = null;
	var nodeCnt = 0;
	listNode = document.getElementsByClassName("task-card-list__items")[0];
	if(listNode != null)
	{
		nodeCnt = listNode.childNodes.length;
	}

	return nodeCnt;
}