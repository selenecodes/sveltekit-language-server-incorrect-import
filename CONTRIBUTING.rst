How to contribute to My SvelteKit App
=====================================

Thank you for considering contributing to My SvelteKit App!


Support questions
-----------------

Please, don't use the issue tracker for this. The issue tracker is a
tool to address bugs and feature requests in My SvelteKit App itself.


Reporting issues
----------------

Issues can be reported at our
`issue tracker <https://gitlab.com/selenecodes/my-sveltekit-app/-/issues>`__.
Include the following information in your post:

-   Describe what you expected to happen.
-   If possible, include a
    `minimal reproducible example <https://stackoverflow.com/help/minimal-reproducible-example>`__ to help us identify the issue. This also helps check that the issue is not with your own code.
-   Describe what actually happened. Include the full traceback if there
    was an exception.
-   List your Python, My SvelteKit App, and other relevant versions. If possible, check if this issue is already fixed in the latest My SvelteKit App release or the latest development version.


Submitting patches
------------------

If there is not an open issue at our
`issue tracker <https://gitlab.com/selenecodes/my-sveltekit-app/-/issues>`__ for what you want to submit, prefer opening one for discussion before working on a PR.

When you start working on an issue, make sure to include the following in your patch:

-   Make sure your code passes the `pre-commit`
    checks. Install pre-commit using the instructions below.
-   Include tests if your patch adds or changes code. Make sure the test
    fails without your patch.
-   Update any relevant docs pages and docstrings.


Installing pre-commit and requirements
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-   Install the project dependencies. This will install the pre-commit hooks automatically.

    .. code-block:: bash
        npm i


Start coding
~~~~~~~~~~~~

-   Create a branch to identify the issue you would like to work on. If
    you're submitting a feature addition, change or non-critical bug fix,
    branch off of the "develop" branch.

    .. code-block:: bash

        git fetch origin
        git checkout -b your-branch-name origin/develop

-   Critical bug fixes should be branched off of the "main" branch instead.

    .. code-block:: bash

        git fetch origin
        git checkout -b your-branch-name origin/main
-   Include tests that cover any code changes you make. Make sure the
    test fails without your patch. Run the tests as described below.

-   Link to the issue being addressed with
    ``fixes #123`` in the merge or pull request.

Running the tests
~~~~~~~~~~~~~~~~~

Run the test suite with vitest.

.. code-block:: bash

    npm run test:unit

This runs the tests for the current environment, which is usually
sufficient. CI will run the full suite when you submit your merge or pull
request.

.. Building the docs
.. ~~~~~~~~~~~~~~~~~

.. Build the docs in the ``doc`` directory using `Sphinx <https://www.sphinx-doc.org/en/stable/>`__.

.. .. code-block:: bash

..     python setup.py build_sphinx

.. Open ``doc/_build/html/index.html`` in your browser to view the docs.
