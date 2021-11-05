import re
import string


def clean_msg(msg: str) -> str:
    msg = re.sub(r'<.*?>', '', msg)  # remove <>
    msg = re.sub(r'#', '', msg)  # remove #
    for c in string.punctuation:  # remove ''
        msg = re.sub(r'\{}'.format(c), '', msg)
    msg = ' '.join(msg.split())
    return msg
