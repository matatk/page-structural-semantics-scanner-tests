echo About to run all example scripts.
echo
echo "Note: in order for them to be able to require() the package, you must first run:"
echo
echo "          npm link"
echo "          npm link page-structural-semantics-scanner-tests"
echo
for example_script in examples/*.js; do
	echo $example_script
	echo Press ENTER to run...
	read
	node $example_script | less
done
