deploy:
	node generate.js
	git add -A
	git commit -m "Update to FontAwesome Pro v$(head -n 1 index.js | grep -oP 'FontAwesome Pro v\K\S+')"
	git push -u origin master
	npm publish

